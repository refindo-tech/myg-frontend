"use client";
import type { NextPage } from "next";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Button, Image, Input, Avatar } from "@nextui-org/react";
import icons from "@/components/icons/icon";
import images from "../../../../public/images/images";
import Ornamen1 from "@/components/mybeautica/atoms/ornamen1";
import Ornamen2 from "@/components/mybeautica/atoms/ornamen2";
import { fetchServices } from "@/lib/fetchData";
import Head from "next/head";

import NavbarComponent from "@/components/mybeautica/Navbar";
import FooterComponent from "@/components/mybeautica/Footer";

interface Service {
  serviceId: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  views: number;
}

export const formatToRupiah = (number: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  })
    .format(number)
    .replace("IDR", "IDR ");
};

const Detail: NextPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const getServices = async () => {
      const data = await fetchServices();
      if (data && data.meta.success) {
        setServices(data.meta.message);
      } else {
        setError("Failed to load services");
      }
      setLoading(false);
    };

    getServices();
  }, []);

  const [openFAQIndices, setOpenFAQIndices] = useState<number[]>([]);
  const [serviceViews, setServiceViews] = useState<Service[]>(services);

  const toggleFAQ = (index: number) => {
    if (openFAQIndices.includes(index)) {
      setOpenFAQIndices(openFAQIndices.filter((i) => i !== index));
    } else {
      setOpenFAQIndices([...openFAQIndices, index]);
    }
  };

  const incrementViews = (id: number) => {
    setServiceViews((prevViews) =>
      prevViews.map((service) =>
        service.serviceId === id
          ? { ...service, views: service.views + 1 }
          : service
      )
    );
  };

  useEffect(() => {
    setServiceViews(services);
  }, [services]);

  const mostViewedService = serviceViews.reduce(
    (max, service) => (service.views > max.views ? service : max),
    serviceViews[0]
  );

  const handleOrderClick = (service: Service) => {
    const whatsappNumber = "62895620930010";
    const message = `Halo, saya ingin memesan layanan ${service.title} dengan harga ${formatToRupiah(
      service.price
    )}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleConsultationClick = () => {
    const whatsappNumber = "62895620930010";
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
      <Head>
        <title>Detail Page</title>
      </Head>

      <NavbarComponent
        handleConsultationClick={handleConsultationClick}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      <main>
        {/* Menampilkan detail deskripsi layanan */}
        <section className="relative container mx-auto flex flex-col md:flex-row justify-between items-center py-4 mt-4 w-full xl:px-10 xl:mt-8 h-full">
          <Ornamen1 className="absolute top-0 left-0 xl:w-[200px] xl:h-[300px]" />
          <div className="flex flex-none flex-col w-full md:basis-1/2 justify-center items-center text-left">
            <Image
              src={mostViewedService?.imageUrl || ""}
              alt="Image"
              className="flex rounded-lg w-96 xl:pr-2 xl:w-[826px] xl:h-[731px]"
            />
          </div>
          <Ornamen2 className="absolute bottom-0 right-0 xl:w-[155px] xl:h-[170px] xl:hidden" />
          <div className="flex flex-col md:basis-1/2 justify-start items-center xl:mt-0 md:mt-0 relative h-full">
            <div className="hidden flex-col  mx-2 my-2 px-2 gap-3 xl:flex bg-white rounded-lg">
              <div className="text-2xl font-playfair xl:text-4xl">
                <h2>{mostViewedService?.title}</h2>
              </div>
              <div className="text-xl font-openSans">
                <p>
                  {mostViewedService
                    ? formatToRupiah(mostViewedService.price)
                    : ""}
                </p>
              </div>
              <div className="text-zinc text-sm font-openSans">
                Dilihat: {mostViewedService?.views} kali
              </div>
              <div className="text-xl font-openSans text-justify text-zinc">
                <p>{mostViewedService?.description}</p>
              </div>
              <div className="mb-4">
                <Button
                  className="bg-ungu text-white font-openSans font-semibold rounded-lg px-4 py-2 w-full"
                  onClick={() => handleOrderClick(mostViewedService!)}
                >
                  Pesan Layanan
                </Button>
              </div>
            </div>
          </div>
          <Ornamen2 className="hidden absolute bottom-0 right-0 xl:w-[155px] xl:h-[170px] xl:block" />
        </section>

        {/* Menampilkan Cara Reservasi Layanan dan Lokasi */}
        <section className="flex flex-col py-4 px-4 xl:px-40 xl:py-10 gap-3">
          <div className="flex flex-col gap-3 w-full xl:flex-row xl:px-20">
            <div className="flex flex-col xl:w-2/3 xl:gap-10">
              <div className="flex flex-col gap-2 mt-4">
                <h2 className="text-2xl font-playfair mb-4 xl:text-4xl">
                  Cara Reservasi Layanan
                </h2>
                <ol className="list-decimal pl-4 space-y-2 font-openSans text-sm text-zinc xl:text-xl">
                  <li>Klik tombol 'Pesan' di halaman detail layanan.</li>
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
                      Email:{" "}
                      <a
                        href="mailto:info@mybeauticawellness.com"
                        className="font-semibold"
                      >
                        info@mybeauticawellness.com
                      </a>
                    </li>
                    <li>
                      Telepon: <a className="font-semibold">(021) 123-4567</a>
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
                  width="w-full"
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
                  RT.13/RW.6, Kb. Kosong, Kec. Kemayoran,
                  <br />
                  Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10630
                </address>
              </div>
            </div>
          </div>
        </section>


        {/* Menampilkan Layanan Lainnya */}
        <section className="py-8 mt-3 xl:px-64 bg-pink3">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-semibold font-playfair mb-4 text-ungu2 xl:text-5xl">
              Layanan Lainnya
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.serviceId}
                  className="flex flex-col bg-transparent rounded-md shadow-none p-4 mb-6 gap-2 cursor-pointer"
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
                    <h3 className="text-lg font-semibold font-playfair text-black">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex-0 justify-end items-end font-openSans">
                    <div className="flex flex-col w-full py-2">
                      <span className="text-lg font-bold">
                        {formatToRupiah(service.price)}
                      </span>
                      <p className="text-sm font-normal text-gray-700 mt-1 line-clamp-3">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <icons.EyeFilledIcon className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-500 text-xs">
                          {"Dilihat " + service.views + " kali"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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
