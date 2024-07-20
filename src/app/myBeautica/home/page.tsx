"use client";
import type { NextPage } from "next";
import React, { useState, ChangeEvent, useRef } from "react";
import {
  Button,
  Image,
  Input,
  Avatar,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
import icons from "@/components/icons/icon";
import images from "../../../../public/images/images";

type User = {
  id: number;
  fullName: string;
  role: string;
};

type Service = {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  viewCount: number;
};

type FAQItem = {
  question: string;
  answer: string;
};

type Testimonial = {
  fullName: string;
  role: string;
  comment: string;
};

const users: User[] = [
  { id: 1, fullName: "Farah Adelia Putri", role: "Pelanggan" },
  { id: 2, fullName: "John Doe", role: "Pelanggan" },
  { id: 3, fullName: "Muhammad Rafli Gimnastiar", role: "Pelanggan" },
];

const services: Service[] = [
  {
    id: 1,
    title: "8 Benefits Of Using Facial Serum",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ipsam, repellendus dolore, incidunt hic dolorum, voluptates quo pariatur explicabo autem repudiandae quis facilis distinctio fugit iusto atque veniam nesciunt expedita.",
    price: 250000,
    imageUrl: images.myBeautica_image2.src,
    viewCount: 0,
  },
  {
    id: 2,
    title: "4 Benefits of Hand & Body Lotion",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ipsam, repellendus dolore, incidunt hic dolorum, voluptates quo pariatur explicabo autem repudiandae quis facilis distinctio fugit iusto atque veniam nesciunt expedita.",
    price: 120000,
    imageUrl: images.myBeautica_image2.src,
    viewCount: 0,
  },
  {
    id: 3,
    title: "Chemical Peels Facial Treatment",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ipsam, repellendus dolore, incidunt hic dolorum, voluptates quo pariatur explicabo autem repudiandae quis facilis distinctio fugit iusto atque veniam nesciunt expedita.",
    price: 199000,
    imageUrl: images.myBeautica_image2.src,
    viewCount: 0,
  },
  {
    id: 4,
    title: "Chemical Peels Facial Treatment",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ipsam, repellendus dolore, incidunt hic dolorum, voluptates quo pariatur explicabo autem repudiandae quis facilis distinctio fugit iusto atque veniam nesciunt expedita.",
    price: 199000,
    imageUrl: images.myBeautica_image3.src,
    viewCount: 0,
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Bagaimana cara reservasi layanan kami?",
    answer:
      "Anda perlu melakukan pendaftaran akun terlebih dahulu. Dengan mengisi data yang diperlukan dan melakukan diskusi dengan Admin terkait waktu reservasi.",
  },
  {
    question: "Ketentuan menggunakan layanan kami",
    answer:
      "Syarat dan ketentuan berlaku untuk setiap layanan yang kami sediakan.",
  },
  {
    question: "Bagaimana cara saya melakukan konsultasi?",
    answer:
      "Anda dapat menghubungi kami melalui form kontak yang tersedia di website.",
  },
  {
    question: "Apakah manfaat dari layanan kami?",
    answer:
      "Layanan kami dirancang khusus untuk mempercantik dan meremajakan kulit Anda.",
  },
  {
    question: "Lokasi layanan kami",
    answer:
      "Kami berlokasi di Jl. Perintis No.11, Taman Kapasuss, Kelurahan Drangong, Kecamatan Taktakan, Kota Serang, Provinsi Banten.",
  },
  { question: "Bagaimana cara melakukan pembayaran", answer: "Pembayaran dilakukan di tempat." },
];

const testimonials: Testimonial[] = [
  {
    fullName: "Farah Adelia Putri",
    role: "Pelanggan",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet orci in odio volutpat auctor. Sed leo velit.",
  },
  {
    fullName: "John Doe",
    role: "Pelanggan",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet orci in odio volutpat auctor. Sed leo velit.",
  },
  {
    fullName: "Muhammad Rafli Gimnastiar",
    role: "Pelanggan",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet orci in odio volutpat auctor. Sed leo velit.",
  },
  {
    fullName: "John Doe",
    role: "Pelanggan",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet orci in odio volutpat auctor. Sed leo velit.",
  },
  {
    fullName: "Muhammad Rafli Gimnastiar",
    role: "Pelanggan",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet orci in odio volutpat auctor. Sed leo velit.",
  },
  {
    fullName: "Muhammad Rafli Gimnastiar",
    role: "Pelanggan",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet orci in odio volutpat auctor. Sed leo velit.",
  },
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

const Home: NextPage = () => {
  const [openFAQIndices, setOpenFAQIndices] = useState<number[]>([]);
  const [serviceViews, setServiceViews] = useState<Service[]>(services);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [newTestimonial, setNewTestimonial] = useState<Testimonial>({
    fullName: users[0].fullName,
    role: users[0].role,
    comment: "",
  });
  const serviceSectionRef = useRef<HTMLDivElement>(null);

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
        service.id === id ? { ...service, viewCount: service.viewCount + 1 } : service
      )
    );
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Testimonial submitted:", newTestimonial);
    onOpenChange();
  };

  const mostViewedService = serviceViews.reduce(
    (max, service) => (service.viewCount > max.viewCount ? service : max),
    serviceViews[0]
  );

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


  return (
    <div className="w-full h-full">
      {/* Navbar */}
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <Image
              src={images.my_Beauty_logo.src}
              alt="Logo"
              className="object-cover w-[70px] h-[46px] "
            />
          </NavbarBrand>
          <NavbarContent className="hidden xl:flex gap-16 font-playfair font-semibold">
            <NavbarItem>
              <Link color="foreground" href="#">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                href="#"
                onClick={handleConsultationClick}
                className="cursor-pointer text-zinc"
              >
                Konsultasi
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem]",
              mainWrapper: "h-full p-0",
              input:
                "text-gray-400 text-sm font-normal font-['Open Sans'] leading-[14px] dark:placeholder-gray-500",
              inputWrapper:
                "h-1/2 font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="I'm looking for..."
            size="sm"
            endContent={<icons.SearchIcon size={18} />}
            type="search"
            radius="full"
          />
          <Dropdown
            placement="bottom-end"
            className="hidden xl:flex items-center gap-2 font-openSans text-zinc"
          >
            <DropdownTrigger>
              <div className="xl:flex items-center hidden">
                <Avatar
                  showFallback
                  name="Jane Doe"
                  src="https://images.unsplash.com/broken"
                  className="bg-ungu2 text-white font-inter"
                />
                <Button isIconOnly variant="light">
                  Login
                </Button>
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Profile</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown className="xl:hidden">
            <DropdownTrigger>
              <Button isIconOnly variant="light" className="xl:hidden">
                <icons.MenuIcon />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Profile</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>

      <main>
        {/* content 1 */}
        <section className=" bg-ungu flex flex-col xl:flex-row xl:h-[800px]">
          <div className="bg-pink1 flex mt-6 rounded-tr-lg xl:w-3/5">
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
              {serviceViews.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col bg-white rounded-md p-4 mb-6 gap-2 cursor-pointer"
                  onClick={() => incrementViews(service.id)}
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
              ))}
            </div>
          </div>
        </section>

        {/* content 3 */}
        <section className="py-8 bg-pink3">
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
        </section>

        {/* Content 4 */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="w-full flex justify-center items-center relative">
              <div className="bg-red-300 rounded-full w-20 h-10 absolute z-0 right-1/2 -top-21 blur-2xl" />
              <h1 className="text-[65px] text-default-700 font-normal mb-8 font-playfair">
                FAQs
              </h1>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
              {faqItems.map((item, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="w-full text-left p-4 bg-white border-b flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h4
                      className={`font-semibold font-openSans ${
                        openFAQIndices.includes(index) ? "text-ungu" : ""
                      }`}
                    >
                      {item.question}
                    </h4>
                    <span
                      className={`text-xl ${
                        openFAQIndices.includes(index) ? "text-ungu" : ""
                      }`}
                    >
                      {openFAQIndices.includes(index) ? (
                        <icons.MinusIcon />
                      ) : (
                        <icons.PlusIcon />
                      )}
                    </span>
                  </button>
                  {openFAQIndices.includes(index) && (
                    <div className="p-4 bg-white text-zinc font-openSans">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content 5 */}
        <section className="w-full max-w-[1420px] mx-auto bg-white p-8 xl:px-32">
          <div className="w-full items-center flex flex-col lg:flex-row gap-8">
            <div className="h-full relative flex md:basis-2/5 justify-center items-center flex-col pr-0 md:pr-8 overflow-visible">
              <div className="absolute -top-30 right-0 text-mya-600 text-[532px] font-normal font-['Open Sans'] leading-normal z-0 blur-2xl">
                ?
              </div>
              <div className="w-full text-right text-zinc-700 text-6xl md:text-6xl xl:text-7xl font-bold font-playfair leading-shallow z-10">
                Apa Kata Pembeli Sebelumnya?
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 md:basis-3/5">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div
                  key={index}
                  className="relative px-8 py-10 bg-zinc-100 rounded-[14px] shadow flex-col items-center gap-5 inline-flex min-h-full"
                >
                  <div className="flex-1 w-full h-full flex flex-col items-center justify-center">
                    <div className="absolute -top-8 text-black text-[120px] font-normal font-['Open Sans'] leading-normal">
                      “
                    </div>
                    <div className="relative flex-col flex py-4 min-h-[150px] xl:min-h-[100px] items-center justify-center">
                      <div className="w-full text-center text-black text-normal font-normal font-['Open Sans'] leading-normal">
                        {" "}
                        "{testimonial.comment}"{" "}
                      </div>
                    </div>
                  </div>
                  <div className="justify-start bottom-0 gap-4 flex flex-col md:flex-row items-center md:w-full">
                    <Avatar
                      showFallback
                      src="https://images.unsplash.com/broken"
                      name={testimonial.fullName}
                      alt="Avatar"
                      size="lg"
                      className="flex-none bg-ungu2 text-white font-inter w-10 h-10 rounded-full"
                    />
                    <div className="justify-start items-start inline-flex h-full">
                      <div className="flex-col justify-start items-center md:items-start flex">
                        <div className="text-black text-lg font-semibold font-['Open Sans']">
                          {testimonial.fullName}
                        </div>
                        <div className="text-center text-black text-sm font-normal font-['Open Sans']">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex px-8 py-10 bg-zinc-100 rounded-[14px] shadow flex-col items-center gap-5  min-h-full">
                <div className="flex-1 w-full h-full flex flex-row lg:flex-col xl:flex-row items-center justify-center gap-5">
                  <div className="w-full h-full p-5 rounded-xl shadow border border-dashed border-black flex-col justify-center items-center gap-2 inline-flex">
                    <div className="self-stretch text-center text-black text-normal font-normal font-['Open Sans'] leading-normal">
                      Berikan Pendapatmu disini!
                    </div>
                    <Button
                      color="default"
                      variant="solid"
                      size="md"
                      radius="full"
                      onPress={onOpen}
                    >
                      <icons.AddCommentIcon size={24} fill="currentColor" />
                    </Button>
                  </div>
                  <div className="w-full h-full px-3 bg-red-50 rounded-xl shadow flex-col justify-center items-center gap-3 inline-flex">
                    <div className="text-center text-black text-normal font-normal font-['Open Sans'] leading-normal">
                      Lihat lainnya di
                    </div>
                    <div className="self-stretch px-2 py-1.5 bg-zinc-100 rounded justify-end items-center gap-2.5 inline-flex">
                      <icons.YoutubeIcon size={48} fill="currentColor" />
                      <div className="text-center text-black text-normal font-bold font-['Open Sans'] leading-normal">
                        Youtube
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal for adding testimonial */}
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

      {/* Footer */}
      <footer className="bg-stone-800 flex flex-col text-white py-8 px-6 w-full xl:px-32">
        <div className="flex flex-col xl:flex-row xl:justify-between pb-3 border-b">
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

export default Home;
