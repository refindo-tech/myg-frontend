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
    description: "Serum wajah adalah produk perawatan yang memiliki tekstur ringan dan memiliki konsentrasi bahan aktif yang tinggi...",
    price: 250000,
    imageUrl: images.myBeautica_image2.src,
    viewCount: 0, 
  },
  {
    id: 2,
    title: "4 Benefits of Hand & Body Lotion",
    description: "Melindungi kulit dari kekeringan, menjaga kelembaban kulit, dan memberikan nutrisi yang dibutuhkan...",
    price: 120000,
    imageUrl: images.myBeautica_image2.src,
    viewCount: 0,
  },
  {
    id: 3,
    title: "Chemical Peels Facial Treatment",
    description: "Perawatan kulit yang membantu mengurangi keriput, bekas luka, dan jerawat dengan cara mengelupas kulit...",
    price: 199000,
    imageUrl: images.myBeautica_image2.src,
    viewCount: 0,
  },
  {
    id: 4,
    title: "Chemical Peels Facial Treatment",
    description: "Perawatan kulit yang membantu mengurangi keriput, bekas luka, dan jerawat dengan cara mengelupas kulit...",
    price: 199000,
    imageUrl: images.myBeautica_image2.src,
    viewCount: 0,
  },
];

const faqItems: FAQItem[] = [
  { question: "Bagaimana cara reservasi layanan kami?", answer: "Anda perlu melakukan pendaftaran akun terlebih dahulu. Dengan mengisi data yang diperlukan dan melakukan diskusi dengan Admin terkait waktu reservasi." },
  { question: "Ketentuan menggunakan layanan kami", answer: "Syarat dan ketentuan berlaku untuk setiap layanan yang kami sediakan." },
  { question: "Bagaimana cara saya melakukan konsultasi?", answer: "Anda dapat menghubungi kami melalui form kontak yang tersedia di website." },
  { question: "Apakah manfaat dari layanan kami?", answer: "Layanan kami dirancang khusus untuk mempercantik dan meremajakan kulit Anda." },
  { question: "Lokasi layanan kami", answer: "Kami berlokasi di Jl. Perintis No.11, Taman Kapasuss, Kelurahan Drangong, Kecamatan Taktakan, Kota Serang, Provinsi Banten." },
  { question: "Bagaimana cara melakukan pembayaran", answer: "Pembayaran dilakukan di tempat." },
];

const testimonials: Testimonial[] = [
  { fullName: "Farah Adelia Putri", role: "Pelanggan", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet orci in odio volutpat auctor. Sed leo velit." },
  { fullName: "John Doe", role: "Pelanggan", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet orci in odio volutpat auctor. Sed leo velit." },
  { fullName: "Muhammad Rafli Gimnastiar", role: "Pelanggan", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet orci in odio volutpat auctor. Sed leo velit." },
  { fullName: "John Doe", role: "Pelanggan", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet orci in odio volutpat auctor. Sed leo velit." },
  { fullName: "Muhammad Rafli Gimnastiar", role: "Pelanggan", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet orci in odio volutpat auctor. Sed leo velit." },
  { fullName: "Muhammad Rafli Gimnastiar", role: "Pelanggan", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet orci in odio volutpat auctor. Sed leo velit." },
];

export const formatToRupiah = (number: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number).replace("IDR", "IDR ");
};

const Home: NextPage = () => {
  const [openFAQIndices, setOpenFAQIndices] = useState<number[]>([]);
  const [serviceViews, setServiceViews] = useState<Service[]>(services);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [newTestimonial, setNewTestimonial] = useState<Testimonial>({ fullName: users[0].fullName, role: users[0].role, comment: '' });
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
    console.log('Testimonial submitted:', newTestimonial);
    onOpenChange();
  };

  const mostViewedService = serviceViews.reduce((max, service) => (service.viewCount > max.viewCount ? service : max), serviceViews[0]);

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
            className="hidden xl:flex"
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
            <h2 className="text-2xl font-semibold font-playfair mb-4 text-ungu2 xl:text-4xl">
              Daftar layanan
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceViews.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col rounded-md p-4 mb-6 gap-2 cursor-pointer"
                  onClick={() => incrementViews(service.id)}
                >
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-40 md:h-64 object-cover rounded-t-md"
                  />
                  <h3 className="text-lg font-semibold ">{service.title}</h3>
                  <p className="text-pink-500 font-bold ">
                    {formatToRupiah(service.price)}
                  </p>
                  <p className="text-gray-700 line-clamp-3">
                    {service.description}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Dilihat: {service.viewCount} kali
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* content 3 */}
        <section className="py-8 bg-pink3">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-semibold mb-4 text-ungu2 font-playfair xl:text-4xl">
              Rekomendasi Layanan
            </h2>
            <div className="flex flex-col items-center gap-6 xl:flex-row">
              <div className="xl:w-3/5">
                <Image
                  src={mostViewedService.imageUrl}
                  alt="Service Image"
                  className="w-[179px] h-[165px] rounded-lg xl:w-[826px] xl:h-[759px]"
                />
              </div>
              <div className="flex flex-col justify-center gap-3 xl:w-2/5">
                <h3 className="text-lg font-semibold xl:text-4xl">
                  {mostViewedService.title}
                </h3>
                <p className="text-pink-500 font-bold text-xs xl:text-2xl">
                  {formatToRupiah(mostViewedService.price)}
                </p>
                <p className="text-zinc text-xs font-normal xl:text-2xl">
                  {mostViewedService.description}
                </p>
                <Button
                  className="bg-ungu text-white font-openSans font-semibold rounded-lg px-4 py-2 w-full"
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
            <h2 className="text-2xl font-semibold mb-4 text-center xl:text-left">
              FAQs
            </h2>
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
        <section className="py-8 bg-white">
          <div className="flex flex-col mx-auto px-4 md:px-8 xl:flex-row">
            <div className="flex xl:w-3/5">
              <Image
                src={images.myBeautica_image4.src}
                alt="Service Image"
                className="w-full rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 justify-center gap-3">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-white shadow-md p-6 rounded-lg`}
                >
                  <p className="text-lg italic mb-4">"{testimonial.comment}"</p>
                  <div className="flex items-center gap-1">
                    <div className="flex-shrink-0">
                      <Avatar
                        showFallback
                        name={testimonial.fullName}
                        src="https://images.unsplash.com/broken"
                        className="bg-ungu2 text-white font-inter w-10 h-10 rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.fullName}</h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
                <Button
                  className="bg-ungu text-white font-semibold font-openSans rounded-lg"
                  onPress={onOpen}
                >
                  Tambah Testimonial
                </Button>
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
              <ModalHeader className="flex flex-col gap-1">
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
                <Button color="danger" variant="light" onPress={onClose}>
                  Batal
                </Button>
                <Button color="primary" onPress={handleSubmit}>
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
