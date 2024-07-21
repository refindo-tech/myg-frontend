"use client";
import React, { useEffect, useState, ChangeEvent, useRef } from "react";
import {
  Button,
  Image,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import icons from "@/components/icons/icon";
import images from "../../../../public/images/images";
import { fetchServices, fetchTestimonials } from "@/lib/fetchData";
import NextLink from "next/link";
import NavbarComponent from "@/components/mybeautica/Navbar";
import FooterComponent from "@/components/mybeautica/Footer";
import FAQComponent from "@/components/mybeautica/FAQ";
import TestimoniComponent from "@/components/mybeautica/Testimoni";

type User = {
  id: number;
  fullName: string;
  role: string;
};

type Service = {
  serviceId: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

type Testimonial = {
  reviewId: number;
  fullName: string;
  role: string;
  comment: string;
};

const users: User[] = [
  { id: 1, fullName: "Farah Adelia Putri", role: "Pelanggan" },
  { id: 2, fullName: "John Doe", role: "Pelanggan" },
  { id: 3, fullName: "Muhammad Rafli Gimnastiar", role: "Pelanggan" },
];

const faqItems: FAQItem[] = [
  {
    question: "Bagaimana cara reservasi layanan kami?",
    answer: "Anda perlu melakukan pendaftaran akun terlebih dahulu. Dengan mengisi data yang diperlukan dan melakukan diskusi dengan Admin terkait waktu reservasi.",
  },
  {
    question: "Ketentuan menggunakan layanan kami",
    answer: "Syarat dan ketentuan berlaku untuk setiap layanan yang kami sediakan.",
  },
  {
    question: "Bagaimana cara saya melakukan konsultasi?",
    answer: "Anda dapat menghubungi kami melalui form kontak yang tersedia di website.",
  },
  {
    question: "Apakah manfaat dari layanan kami?",
    answer: "Layanan kami dirancang khusus untuk mempercantik dan meremajakan kulit Anda.",
  },
  {
    question: "Lokasi layanan kami",
    answer: "Kami berlokasi di Jl. Perintis No.11, Taman Kapasuss, Kelurahan Drangong, Kecamatan Taktakan, Kota Serang, Provinsi Banten.",
  },
  { question: "Bagaimana cara melakukan pembayaran", answer: "Pembayaran dilakukan di tempat." },
];

export const formatToRupiah = (number: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  })
    .format(number)
    .replace("IDR", "IDR ");
};

const Home = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [openFAQIndices, setOpenFAQIndices] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const serviceSectionRef = useRef<HTMLDivElement>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [newTestimonial, setNewTestimonial] = useState<Testimonial>({
    reviewId: 0,
    fullName: users[0].fullName,
    role: users[0].role,
    comment: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const [servicesData, testimonialsData] = await Promise.all([fetchServices(), fetchTestimonials()]);

        if (servicesData && servicesData.meta.success) {
          setServices(servicesData.meta.message);
        } else {
          setError("Failed to load services");
        }

        if (testimonialsData && testimonialsData.meta.success) {
          setTestimonials(testimonialsData.meta.message);
        } else {
          setError("Failed to load testimonials");
        }
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const mostViewedService = services.length > 0 ? services.reduce(
    (max, service) => (service.viewCount > max.viewCount ? service : max),
    services[0]
  ) : null;

  const handleOrderClick = (service: Service) => {
    const whatsappNumber = "62895620930010";
    const message = `Halo, saya ingin memesan layanan ${service.title} dengan harga ${formatToRupiah(service.price)}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleConsultationClick = () => {
    const whatsappNumber = "62895620930010";
    const message = "Halo, saya ingin berkonsultasi mengenai layanan My Beautica.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleExploreProductsClick = () => {
    serviceSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleFAQ = (index: number) => {
    if (openFAQIndices.includes(index)) {
      setOpenFAQIndices(openFAQIndices.filter((i) => i !== index));
    } else {
      setOpenFAQIndices([...openFAQIndices, index]);
    }
  };

  const incrementViews = (id: number) => {
    setServices((prevViews) =>
      prevViews.map((service) =>
        service.serviceId === id ? { ...service, viewCount: service.viewCount + 1 } : service
      )
    );
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Testimonial submitted:", newTestimonial);
    onOpenChange();
  };

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTestimonials = testimonials.filter((testimonial) =>
    testimonial.comment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFAQItems = faqItems.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!services || services.length === 0) {
    return <div>No services available</div>;
  }

  return (
    <div className="w-full h-full">
      <NavbarComponent
        handleConsultationClick={handleConsultationClick}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      <main>
        {/* content 1 */}
        <section className=" bg-ungu w-full h-full flex flex-col xl:flex-row xl:h-dvh">
          <div className="bg-pink1 flex mt-6 rounded-tr-lg xl:w-3/5 xl:mt-24">
            <div className="bg-pink2 flex rounded-tr-lg my-3 mr-3 w-full">
              <div className="flex flex-col justify-center py-12 p-3 xl:px-32 xl:gap-8">
                <h1 className="text-3xl font-bold text-ungu font-playfair text-left xl:text-5xl">
                  My Beautica: Solusi Kecantikan Premium untuk Kulit yang
                  Memukau
                </h1>
                <p className="mt-4 text-zinc font-openSans text-left xl:text-xl xl:pr-16">
                  My Beautica menawarkan pelayanan kecantikan eksklusif dengan
                  menggunakan produk-produk inovatif yang dirancang khusus untuk
                  mempercantik dan meremajakan kulit Anda.
                </p>
                <div className="flex items-start mt-4 xl:w-2/5">
                  <Button
                    className="bg-ungu text-white font-semibold font-openSans rounded-lg"
                    onClick={handleExploreProductsClick}
                  >
                    Jelajahi Produk kami
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center xl:justify-start xl:items-end">
            <Image
              src={images.myBeautica_image1.src}
              alt="Image"
              className="w-[243px] h-[292px] rounded-none xl:w-full xl:h-full"
            />
          </div>
        </section>

        {/* content 2 */}
        <section ref={serviceSectionRef} className="py-8 xl:px-64">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-semibold font-playfair mb-4 text-ungu2 xl:text-5xl">
              Daftar layanan
            </h2>
            <div className="grid grid-cols-2 shadow-none md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <NextLink
                  key={service.serviceId}
                  href={`/services/${service.serviceId}`} // Link to the detail page
                  passHref
                >
                  <div
                    key={service.serviceId}
                    className="flex flex-col bg-white rounded-md p-4 mb-6 gap-2 cursor-pointer"
                    onClick={() => incrementViews(service.serviceId)}
                  >
                    <div className="overflow-visible flex justify-center items-center w-full rounded-t-md">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-40 md:h-96 object-cover rounded-t-md"
                      />
                    </div>
                    <div className="flex flex-col pt-2 flex-1 items-start">
                      <h3 className="text-lg font-playfair font-semibold text-black">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex-0 justify-end items-end font-openSans">
                      <div className="flex flex-col w-full py-2">
                        <span className="text-lg font-semibold">
                          {formatToRupiah(service.price)}
                        </span>
                        <p className="text-sm font-normal text-gray-700 mt-1 line-clamp-3">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <icons.EyeFilledIcon className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-500 text-xs">
                            {"Dilihat " + service.viewCount + " kali"}
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

        {/* content 3 */}
        <section className="py-8 bg-pink3">
          {mostViewedService && (
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="text-2xl font-semibold mb-4 text-ungu2 font-playfair xl:text-5xl">
                Rekomendasi Layanan
              </h2>
              <div className="flex flex-col items-center gap-6 xl:flex-row">
                <div className="w-full xl:w-3/5">
                  <Image
                    src={mostViewedService.imageUrl}
                    alt="Service Image"
                    className="w-[179px] h-[165px] rounded-lg xl:w-[826px] xl:h-[759px]"
                  />
                </div>
                <div className="flex flex-col justify-center gap-4 w-full xl:w-2/5">
                  <h3 className="text-lg font-semibold font-playfair xl:text-3xl">
                    {mostViewedService.title}
                  </h3>
                  <p className="font-semibold font-openSans text-lg xl:text-2xl">
                    {formatToRupiah(mostViewedService.price)}
                  </p>
                  <p className="text-zinc text-sm font-normal font-openSans xl:text-lg line-clamp-10">
                    {mostViewedService.description}
                  </p>
                  <Button
                    className="bg-ungu text-white font-openSans font-semibold rounded-lg px-4 py-2"
                    onClick={() => handleOrderClick(mostViewedService)}
                  >
                    Pesan Layanan
                  </Button>
                </div>
              </div>
            </div>
          )}
        </section>

        <FAQComponent faqItems={filteredFAQItems} />

        <TestimoniComponent testimonials={filteredTestimonials} users={users} />
      </main>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white font-openSans text-center border-b-medium bg-ungu">
                Tambah Testimonial
              </ModalHeader>
              <ModalBody>
                <Input
                  isReadOnly
                  fullWidth
                  label="Nama"
                  value={newTestimonial.fullName}
                />
                <Input
                  isReadOnly
                  fullWidth
                  label="Peran"
                  value={newTestimonial.role}
                />
                <Textarea
                  fullWidth
                  label="Testimonial"
                  name="comment"
                  value={newTestimonial.comment}
                  onChange={handleInputChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="default"
                  variant="solid"
                  className="font-openSans font-semibold"
                  onPress={onClose}
                >
                  Batal
                </Button>
                <Button
                  variant="light"
                  className="bg-ungu text-white font-openSans font-semibold"
                  onPress={handleSubmit}
                >
                  Kirim
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <FooterComponent />
    </div>
  );
};

export default Home;
