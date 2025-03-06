"use client";
import type { NextPage } from "next";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Button, Image, CircularProgress } from "@nextui-org/react";
import { useParams } from "next/navigation";
import NextLink from "next/link";
import icons from "@/components/icons/icon";
import Ornamen1 from "@/components/mybeautica/atoms/ornamen1";
import Ornamen2 from "@/components/mybeautica/atoms/ornamen2";
import {
  fetchServiceById,
  fetchServices,
  updateServiceViews,
} from "@/lib/admin/listLayanan/listLayananServiceAPI";
import Head from "next/head";
import NavbarComponent from "@/components/mybeautica/organisms/Navbar";
import FooterComponent from "@/components/common/organism/Footer";
import Description from "@/components/mybeautica/molecules/Description";
import { getUserProfile, logoutUser } from "@/lib/authentication/fetchData";
import useAuthCheck from "@/hooks/common/auth";

interface Service {
  serviceId: number;
  title: string;
  description: string;
  price: number | string;
  imageUrl: string;
  viewCount?: number;
  views?: number;
}

export const formatToRupiah = (number: number | string): string => {
  const numValue = typeof number === 'string' ? parseFloat(number) : number;
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  })
    .format(numValue)
    .replace("IDR", "IDR ");
};

// Utility function to get the full image URL
const getImageUrl = (relativePath: string) => {
  if (!relativePath) return ''; // Handle empty paths
  const formattedPath = relativePath.replace(/\\/g, '/');
  return `${process.env.NEXT_PUBLIC_BASE_API || ''}/${formattedPath}`;
};


const Detail: NextPage = () => {
  const params = useParams();
  // Handle the case where serviceId could be a string or string array
  const serviceIdParam = params?.serviceId;

  
  const router = useRouter();
  const [service, setService] = useState<Service | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [userData, setUserData] = useState<{
    email: string;
    profilePicture: string | null;
    fullName: string;
  } | null>(null);

  const isLogged = useAuthCheck();

  // Gunakan Optional Chaining dan Nullish Coalescing
  const serviceId = params?.serviceId 
  ? Array.isArray(params.serviceId) 
    ? params.serviceId[0] 
    : params.serviceId
  : null;


  useEffect(() => {
    const fetchUserProfile = async () => {
      if (isLogged) {
        const profile = await getUserProfile();
        setUserData(profile);
      }
    };

    fetchUserProfile();
  }, [isLogged]);

  const handleLogout = async () => {
    await logoutUser();
    sessionStorage.removeItem("accessToken");
    router.push("/login"); // Redirect to login page after logout
  };

  useEffect(() => {
    const getServices = async () => {
      try {
        const data = await fetchServices();
        
        // Perbaikan penanganan data dari backend
        if (data && data.meta && data.meta.success) {
          // Tambahkan pengecekan tambahan untuk format data
          let servicesList: Service[] = [];
          
          // Jika results adalah objek tunggal, konversi ke array
          if (data.results && typeof data.results === 'object' && !Array.isArray(data.results)) {
            servicesList = [data.results];
          } 
          // Jika sudah array, gunakan langsung
          else if (Array.isArray(data.results)) {
            servicesList = data.results;
          }
          
          // Map data ke format Service
          setServices(
            servicesList.map((service: any) => ({
              serviceId: service.serviceId,
              title: service.title,
              description: service.description,
              price: service.price,
              imageUrl: service.imageUrl,
              views: service.viewCount || 0
            }))
          );
        } else {
          console.error("Invalid services data format:", data);
          setError("Failed to load services: Invalid data format");
        }
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Failed to load services");
      }
      setLoading(false);
    };
  
    getServices();
  }, []);

  useEffect(() => {
    const getService = async () => {
      if (!serviceId || serviceId === 'undefined') {
        setError("Invalid service ID");
        setLoading(false);
        return;
      }
      
      try {
        const data = await fetchServiceById(serviceId);
        
        // Pastikan mengakses results langsung
        if (data && data.results) {
          const serviceData = data.results;
          const updatedService = {
            serviceId: serviceData.serviceId,
            title: serviceData.title,
            description: serviceData.description,
            price: serviceData.price,
            imageUrl: serviceData.imageUrl,
            views: serviceData.viewCount || 0
          };
          setService(updatedService);
  
          // Increment views
          if (updatedService.serviceId) {
            await incrementViews(updatedService.serviceId, updatedService.views);
          }
        } else {
          setError("Failed to load service details");
        }
      } catch (err) {
        console.error("Error fetching service:", err);
        setError("Error fetching service details");
      }
      setLoading(false);
    };
  
    getService();
  }, [serviceId]);

  const incrementViews = async (id: number, currentViews: number) => {
    if (!id || isNaN(id)) {
      console.error("Invalid service ID for view increment");
      return;
    }
    
    try {
      const updatedService = await updateServiceViews(id, currentViews + 1);
      if (updatedService && updatedService.viewCount !== undefined) {
        setService((prevService) =>
          prevService && prevService.serviceId === id
            ? { ...prevService, views: updatedService.viewCount }
            : prevService
        );
        setServices((prevViews) =>
          prevViews.map((service) =>
            service.serviceId === id
              ? { ...service, views: updatedService.viewCount }
              : service
          )
        );
      }
    } catch (error) {
      console.error("Failed to update views", error);
    }
  };

  const handleOrderClick = (service: Service) => {
    const whatsappNumber = "6281314485552";
    const message = `Halo, saya ingin memesan layanan ${
      service.title
    } dengan harga ${formatToRupiah(service.price)}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleConsultationClick = () => {
    const whatsappNumber = "6281314485552";
    const message =
      "Halo, saya ingin berkonsultasi mengenai layanan My Beautica.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center h-screen w-screen">
        <CircularProgress size="lg" aria-label="Loading..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-red-50 p-6 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-2xl font-semibold text-red-700 mb-2">Error</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <Button 
            className="bg-ungu text-white font-openSans font-semibold rounded-lg px-4 py-2"
            onClick={() => router.push('/myBeautica')}
          >
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-2">Service Not Found</h2>
          <p className="text-yellow-600 mb-4">The requested service could not be found.</p>
          <Button 
            className="bg-ungu text-white font-openSans font-semibold rounded-lg px-4 py-2"
            onClick={() => router.push('/myBeautica')}
          >
            View All Services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      {/* Use next/head properly */}
      <Head>
        <title>{`${service.title} | My Beautica`}</title>
      </Head>

      <NavbarComponent
        handleConsultationClick={handleConsultationClick}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        userData={userData}
        onLogout={handleLogout}
      />

      <main>
        {/* Content 1 Menampilkan detail deskripsi layanan */}
        <section className="container flex flex-col gap-8 h-full w-full">
          <div className="relative flex flex-col md:basis-1/2 justify-center items-center text-left mt-8 mx-6 md:flex-row">
            <Image
              src={getImageUrl(service.imageUrl)}
              alt={service.title}
              className="flex rounded-lg w-86 xl:pr-2 xl:w-[826px] xl:h-[731px] z-20"
            />

            <div className="hidden flex-col md:basis-1/2 justify-start items-center xl:mt-0 md:mt-0 relative h-full z-20 md:flex">
              <div className="flex-col mx-2 my-2 px-2 gap-3 xl:flex bg-white rounded-lg">
                <div className="text-2xl font-playfair xl:text-4xl">
                  <h2>{service.title}</h2>
                </div>
                <div className="text-xl font-openSans mt-6">
                  <p>{formatToRupiah(service.price)}</p>
                </div>
                <div className="text-xl mt-6 font-openSans text-justify text-zinc">
                  {/* Fix potential hydration error by ensuring Description properly handles the content */}
                  <Description description={service.description} />
                </div>
                <div className="mb-4 mt-8">
                  <Button
                    className="bg-ungu text-white font-openSans font-semibold rounded-lg px-4 py-6 w-full"
                    onClick={() => handleOrderClick(service)}
                  >
                    Pesan Layanan
                  </Button>
                </div>
              </div>
            </div>

            <Ornamen1 className="absolute -left-4 -top-4 z-10 xl:w-[200px] xl:h-[300px]" />

            <Ornamen2 className="absolute -right-4 -bottom-4 z-10 xl:w-[155px] xl:h-[170px]" />
          </div>

          <div className="flex flex-col md:basis-1/2 justify-start items-center xl:mt-0 md:mt-0 relative h-full z-20 md:hidden">
            <div className="flex-col mx-2 my-2 px-2 gap-8 xl:flex bg-white rounded-lg">
              <div className="text-2xl font-playfair xl:text-4xl">
                <h2>{service.title}</h2>
              </div>
              <div className="text-xl font-openSans mt-6">
                <p>{formatToRupiah(service.price)}</p>
              </div>
              <div className="text-xl mt-6 font-openSans text-justify text-zinc">
                {/* Fix potential hydration error by removing the paragraph tag that might be causing nesting issues */}
                <Description description={service.description} />
              </div>
              <div className="mb-4 mt-8">
                <Button
                  className="bg-ungu text-white font-openSans font-semibold rounded-lg px-4 py-6 w-full"
                  onClick={() => handleOrderClick(service)}
                >
                  Pesan Layanan
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content 2 Menampilkan Cara Reservasi Layanan dan Lokasi */}
        <section className="flex flex-col py-4 px-4 xl:px-40 xl:py-10 gap-3">
          <div className="flex flex-col gap-3 w-full xl:flex-row xl:px-20">
            <div className="flex flex-col xl:w-2/3 xl:gap-10">
              <div className="flex flex-col gap-2 mt-4">
                <h2 className="text-2xl font-playfair mb-4 xl:text-4xl">
                  Cara Reservasi Layanan
                </h2>
                <ol className="list-decimal pl-4 space-y-2 font-openSans text-sm text-zinc xl:text-xl">
                  <li>Klik tombol Pesan di halaman detail layanan.</li>
                  <li>
                    Mulai diskusi dengan Admin untuk menentukan waktu reservasi.
                  </li>
                  <li>
                    Lanjutkan pendaftaran dengan mengisi form konsultasi dan
                    waktu.
                  </li>
                  <li>Reservasi layanan berhasil</li>
                </ol>
              </div>

              <div className="flex flex-col mt-6">
                <h2 className="text-2xl font-playfair mb-4 xl:text-4xl">
                  Pertanyaan dan Kontak
                </h2>
                <div className="font-openSans pt-2 text-sm text-zinc xl:text-xl">
                  <p>
                    Untuk pertanyaan lebih lanjut, Anda dapat menghubungi kami
                    di:
                  </p>
                  <ul className="list-none">
                    <li>
                      Telepon: <span className="font-semibold"> +6281314485552</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:w-1/3">
              <div className="flex flex-col mt-6">
                <h2
                  id="map"
                  className="text-2xl font-playfair mb-4 xl:text-4xl"
                >
                  Lokasi Layanan
                </h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.282646621907!2d106.13395487570472!3d-6.092576259767963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418b41ba42419f%3A0x60c87132fd6ddd9f!2sMy%20Academy!5e0!3m2!1sid!2sid!4v1721152723132!5m2!1sid!2sid"
                  width="100%"
                  height="400"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="flex flex-col my-6">
                <h2 className="text-2xl font-playfair mb-4 xl:text-4xl">
                  My Beautica Wellness
                </h2>
                <address className="not-italic font-openSans pt-2 text-sm text-zinc xl:text-xl">
                  Griya Baladika Asri, Jl. Perintis No.11 Rt. 001 Rw. 015,
                  <br />
                  Taman Kopassus, Kelurahan Drangong, Kecamatan Taktakan, Kota
                  Serang, Provinsi Banten.
                </address>
              </div>
            </div>
          </div>
        </section>

        {/* Content 3 Menampilkan Layanan Lainnya */}
        <section className="py-8 mt-3 xl:px-64 bg-pink3">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-semibold font-playfair mb-4 text-ungu2 xl:text-5xl">
              Layanan Lainnya
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices
                .filter(item => item.serviceId !== service.serviceId) // Exclude current service
                .slice(0, 6) // Limit to 6 services
                .map((otherService: Service) => (
                <NextLink
                  key={otherService.serviceId}
                  href={`/myBeautica/detail/${otherService.serviceId}`}
                  passHref
                >
                  <div
                    className="flex flex-col bg-transparent rounded-md shadow-none p-4 mb-6 gap-2 cursor-pointer"
                    onClick={() =>
                      incrementViews(otherService.serviceId, otherService.views || 0)
                    }
                  >
                    <div className="overflow-visible flex justify-center items-center w-full rounded-t-md">
                      <Image
                        src={getImageUrl(otherService.imageUrl)}
                        alt={otherService.title}
                        className="w-full h-40 md:h-96 object-cover rounded-t-md"
                      />
                    </div>
                    <div className="flex flex-col pt-2 flex-1 items-start">
                      <h3 className="text-lg font-semibold font-playfair text-black">
                        {otherService.title}
                      </h3>
                    </div>
                    <div className="flex-0 justify-end items-end font-openSans">
                      <div className="flex flex-col w-full py-2">
                        <span className="text-lg font-bold">
                          {formatToRupiah(otherService.price)}
                        </span>
                        <p className="text-sm font-normal text-gray-700 mt-1 line-clamp-3">
                          {otherService.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <icons.EyeFilledIcon className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-500 text-xs">
                            {"Dilihat " + (otherService.views || otherService.viewCount || 0) + " kali"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </NextLink>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterComponent />
    </div>
  );
};

export default Detail;