"use client";
import type { NextPage } from "next";
import React, { useState } from "react";
import { Button, Image, Input, Avatar, useDisclosure } from "@nextui-org/react";
import icons from "@/components/icons/icon";
import images from "../../../../public/images/images";
import Ornamen1 from "@/components/ornamen1";
import Ornamen2 from "@/components/ornamen2";
import Head from 'next/head'

interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: typeof images.myBeautica_image2;
  views: number;
}

const services: Service[] = [
  {
    id: 1,
    title: "8 Benefits Of Using Facial Serum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, natus? Numquam, molestiae. Quaerat dolorem in, officiis dolore tempora odio molestiae perferendis, modi quam eius corrupti consectetur nam exercitationem nulla. Non, suscipit aliquam. Dolore repellat saepe debitis tempore quis, neque veritatis.",
    price: 250000,
    imageUrl: images.myBeautica_image2,
    views: 0,
  },
  {
    id: 2,
    title: "4 Benefits of Hand & Body Lotion",
    description:
      "Melindungi kulit dari kekeringan, menjaga kelembaban kulit, dan memberikan nutrisi yang dibutuhkan...",
    price: 120000,
    imageUrl: images.myBeautica_image2,
    views: 0,
  },
  {
    id: 3,
    title: "Chemical Peels Facial Treatment",
    description:
      "Perawatan kulit yang membantu mengurangi keriput, bekas luka, dan jerawat dengan cara mengelupas kulit...",
    price: 199000,
    imageUrl: images.myBeautica_image2,
    views: 0,
  },
  {
    id: 4,
    title: "Chemical Peels Facial Treatment",
    description:
      "Perawatan kulit yang membantu mengurangi keriput, bekas luka, dan jerawat dengan cara mengelupas kulit...",
    price: 199000,
    imageUrl: images.myBeautica_image2,
    views: 0,
  },
];


export const formatToRupiah = (number: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number).replace("IDR", "IDR ");
};

const Detail: NextPage = () => {
  const [openFAQIndices, setOpenFAQIndices] = useState<number[]>([]);
  const [serviceViews, setServiceViews] = useState(services);

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
        service.id === id ? { ...service, views: service.views + 1 } : service
      )
    );
  };

  const mostViewedService = serviceViews.reduce(
    (max, service) => (service.views > max.views ? service : max),
    serviceViews[0]
  );

  const handleOrderClick = (service: Service) => {
    const whatsappNumber = "62895620930010";
    const message = `Halo, saya ingin memesan layanan ${service.title} dengan harga ${formatToRupiah(service.price)}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleConsultationClick = () => {
    const whatsappNumber = "62895620930010";
    const message = "Halo, saya ingin berkonsultasi mengenai layanan My Beautica.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Detail Page</title>
      </Head>
      <header className="bg-white text-white py-4 flex justify-between items-center px-4 md:px-8 xl:px-64">
        <div className="flex">
          <Image
            src={images.my_Beauty_logo.src}
            alt="Image"
            className="object-cover w-[70px] h-[46px] xl:w-[115px] xl:h-[76px]"
          />
        </div>

        <div className="text-black gap-16 justify-between font-playfair font-semibold hidden xl:flex">
          <div className="flex text-ungu">Home</div>
          <div className="flex text-zinc cursor-pointer" onClick={handleConsultationClick}>Konsultasi</div>
        </div>

        <div className="text-black hidden items-center gap-4 xl:flex xl:justify-between">
          <div className="flex">
            <Input
              type="search"
              radius="full"
              isClearable
              variant="bordered"
              placeholder="I'am looking for..."
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "placeholder:font-openSans italic text-zinc",
                ],
              }}
              endContent={<icons.SearchIcon />}
            />
          </div>
          <div className="flex items-center gap-2 font-openSans text-zinc">
            <Avatar
              showFallback
              name="Jane Doe"
              src="https://images.unsplash.com/broken"
              className="bg-ungu2 text-white font-inter"
            />
            Login
          </div>
        </div>

        <div className="flex xl:hidden">
          <Button isIconOnly variant="light">
            <icons.MenuIcon />
          </Button>
        </div>
      </header>

      <main>
        <section>
          <div className="relative mx-2 my-2 px-2 py-2 xl:px-16 xl:py-10 xl:mx-40 xl:flex xl:items-center">
            <div className="w-full">
              <Image
                src={mostViewedService.imageUrl.src}
                alt="Image"
                className="flex rounded-lg w-screen pr-2 xl:max-w-[826px] xl:h-[731px]"
              />
            </div>
            <div className="absolute -top-0 -left-0 w-[63px] h-[94px] xl:w-[200px] xl:h-[300px]">
              <Ornamen1 width="full" height="full" />
            </div>
            <div className="absolute -bottom-0 -right-0 w-[84px] h-[70px] xl:w-[155px] xl:h-[170px]">
              <Ornamen2 width="full" height="full" />
            </div>

            <div className="hidden flex-col  mx-2 my-2 px-2 gap-3 xl:flex bg-white rounded-lg">
              <div className="text-2xl font-playfair xl:text-4xl">
                <h2>{mostViewedService.title}</h2>
              </div>
              <div className="text-xl font-openSans">
                <p>{formatToRupiah(mostViewedService.price)}</p>
              </div>
              <div className="text-zinc text-sm font-openSans">
                Dilihat: {mostViewedService.views} kali
              </div>
              <div className="text-xl font-openSans text-justify text-zinc">
                <p>{mostViewedService.description}</p>
              </div>
              <div className="mb-4">
                <Button className="bg-ungu text-white font-openSans font-semibold rounded-lg px-4 py-2 w-full" onClick={() => handleOrderClick(mostViewedService)}>
                  Pesan Layanan
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col mx-2 my-2 px-2 gap-3 xl:hidden bg-white rounded-lg">
            <div className="text-2xl font-playfair xl:text-4xl">
              <h2>{mostViewedService.title}</h2>
            </div>
            <div>
              <p>{formatToRupiah(mostViewedService.price)}</p>
            </div>
            <div className="text-zinc text-sm font-openSans">
                Dilihat: {mostViewedService.views} kali
            </div>
            <div className="text-zinc">
              <p>{mostViewedService.description}</p>
            </div>
            <div className="mb-4">
                <Button className="bg-ungu text-white font-openSans font-semibold rounded-lg px-4 py-2 w-full" onClick={() => handleOrderClick(mostViewedService)}>
                  Pesan Layanan
                </Button>
              </div>
          </div>
        </section>

        <section className="flex flex-col py-4 px-4 xl:px-40 xl:py-10 gap-3">
          <div className="flex flex-col gap-3 w-full xl:flex-row xl:px-20">

            <div className="flex flex-col xl:w-2/3  xl:gap-10">
              <div className="flex flex-col gap-2 mt-4">
                <h2 className="text-2xl font-playfair mb-4 xl:text-4xl">Cara Reservasi Layanan</h2>
                  <ol className="list-decimal pl-4 space-y-2 font-openSans text-sm text-zinc xl:text-xl">
                    <li>Klik tombol 'Pesan' di halaman detail layanan.</li>
                    <li>Mulai diskusi dengan Admin untuk menentukan waktu reservasi.</li>
                    <li>Lanjutkan pendaftaran dengan mengisi form konsultasi dan waktu.</li>
                    <li>Reservasi layanan berhasil</li>
                  </ol>
              </div>

              <div className="flex flex-col mt-6">
                <h2 className="text-2xl font-playfair mb-4 xl:text-4xl">Pertanyaan dan Kontak</h2>
                  <div className="font-openSans pt-2 text-sm text-zinc xl:text-xl">
                    <p>Untuk pertanyaan lebih lanjut, Anda dapat menghubungi kami di:</p>
                    <ul className="list-none">
                      <li>Email: <a href="mailto:info@mybeauticawellness.com" className="font-semibold">info@mybeauticawellness.com</a></li>
                      <li>Telepon: <a className="font-semibold">(021) 123-4567</a></li>
                    </ul>
                  </div>
              </div>
            </div>

            
            <div className="flex flex-col">
              <div className="flex flex-col mt-6">
                <h2 id="map" className="text-2xl font-playfair mb-4 xl:text-4xl">Lokasi Layanan</h2>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.282646621907!2d106.13395487570472!3d-6.092576259767963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418b41ba42419f%3A0x60c87132fd6ddd9f!2sMy%20Academy!5e0!3m2!1sid!2sid!4v1721152723132!5m2!1sid!2sid" 
                    width="w-screen" 
                    height="400" 
                    style={{ border: "0" }} 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
              </div>

              <div className="flex flex-col my-6">
                <h2 id="map" className="text-2xl font-playfair mb-4 xl:text-4xl">My Beautica Wellness</h2>
                <address className="not-italic font-openSans pt-2 text-sm text-zinc xl:text-xl">
                  RT.13/RW.6, Kb. Kosong, Kec. Kemayoran,<br />
                  Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10630
                </address>
              </div>
            </div>
            
          </div>
        </section>

        <section className="py-8 mt-3 xl:px-64 bg-pink3">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-semibold font-playfair mb-4 text-ungu2 xl:text-4xl">
              Layanan Lainnya
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceViews.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col rounded-md p-4 mb-6 gap-2 cursor-pointer"
                  onClick={() => incrementViews(service.id)}
                >
                  <Image
                    src={service.imageUrl.src}
                    alt={service.title}
                    className="w-full h-40 md:h-64 object-cover rounded-t-md"
                  />
                  <h3 className="text-lg font-semibold ">{service.title}</h3>
                  <p className="text-pink-500 font-bold ">{service.price}</p>
                  <p className="text-gray-700 line-clamp-3">
                    {service.description}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Dilihat: {service.views} kali
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-800 flex flex-col text-white py-8 px-6 w-screen xl:px-32">
        <div className="flex flex-col items-center xl:flex-row xl:justify-between pb-3 border-b">
          <div className="flex">
            <Image
              className="w-[109.60px] h-[76px] mb-4 md:mb-0"
              src={images.myg_logo.src}
              alt="MYG Logo"
            />
          </div>

          <div className="hidden xl:flex">
            <Button className="bg-yellow-400 text-stone-800 font-semibold rounded-full px-4 py-2 mb-4">
              Unduh Aplikasi
            </Button>
          </div>
        </div>

        <div className="flex flex-col mt-3 gap-6 xl:flex-row xl:justify-between">
          <div>
            <h4 className="text-lg font-semibold">Alamat</h4>
            <p className="text-sm opacity-60 leading-tight">
              Beauty, cosmetic & personal care
              <br />
              Griya Baladika Asri, Jl. Perintis No.11 Rt. 001 Rw. 015, Taman
              Kopassus, Kelurahan Drangong, Kecamatan Taktakan, Kota Serang,
              Provinsi Banten., Serang 42162
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Layanan</h4>
            <ul className="text-sm opacity-60 leading-tight space-y-1">
              <li>MYG</li>
              <li>MYA</li>
              <li>My Academy</li>
              <li>My Beautica</li>
              <li>Konsultasi</li>
              <li>Sertifikasi</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-row items-center justify-between xl:gap-20">
              <div className="flex text-lg font-semibold">Contact us</div>
              <div className="flex flex-row gap-3 ">
                <Button isIconOnly variant="light" className="border">
                  <icons.InstagramIcon />
                </Button>

                <Button isIconOnly variant="light" className="border">
                  <icons.YoutubeIcon />
                </Button>
              </div>
            </div>
            <p className="text-sm opacity-60 leading-tight space-y-1">
              +62 813 14485552
              <br />
              help@gmail.com
            </p>
          </div>

          <div className="flex xl:hidden">
            <Button className="bg-yellow-400 text-stone-800 font-semibold rounded-full px-4 py-2 mb-4">
              Unduh Aplikasi
            </Button>
          </div>
        </div>

        <div className="text-xs opacity-40">&copy; 2023 — Copyright</div>
      </footer>
    </div>
  );
};

export default Detail;
