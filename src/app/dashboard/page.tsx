'use client';

import React from 'react';
import HomePage from '@/components/dashboard/HomePage';

const heroData = {
  title: "Bergabunglah dengan kami di Yayasan Multi Yasykur Global",
  description: "Lihat layanan yang ada yaitu My Academy (MYA) dan My Beautica. Layanan kecantikan kami mencakup akademi kecantikan, produk kecantikan, hingga layanan kecantikan langsung.",
  imageUrl: "/assets/images/hero/myg.png",
};


const slides = [
  "/assets/images/hero/myg.png",
  "/assets/images/hero/myacademy.png",
  // "/assets/images/banners/Brightening Body Serum Night.jpg",
];

const services = [
  {
    name: "MyAcademy",
    logo: "/assets/images/logo/myAcademy1.png",
    description: "Berjayalah di bisnis kecantikan bersama kami.",
    image: "/assets/images/services/mya.png",
  },
  {
    name: "MYA",
    logo: "/assets/images/logo/mya1.png",
    description: "Kami menghadirkan produk berkualitas untuk nutrisi dan menjaga kesehatan kulit anda agar selalu sehat, bercahaya & awet muda.",
    image: "/assets/images/services/myAcademy.png",
  },
  {
    name: "MyBeautica",
    logo: "/assets/images/logo/myBeautica1.png",
    description: "Pelayanan kecantikan eksklusif inovatif dengan alat paling mutakhir.",
    image: "/assets/images/services/myBeautica.png",
  },
];

const faqs = [
  {
    question: "Apa itu MYG?",
    answer: "<p>MYG merupakan sebuah icon perusahaan dan yayasan pendidikan. MYG adalah sebuah singkatan dari MULTI YASYKUR GLOBAL. </p><p className='text-red'>Secara Harfiah yaitu:</p><ul><li>MULTI = Manfaat</li><li>Yasykur = Bersyukur</li><li>Global = Menyeluruh</li></ul><p>Kami berharap dapat terus memberikan manfaat dan senantiasa selalu bersyukur.</p><p><br></p>"
  },
  {
    question: "Kenapa harus kami?",
    answer: "Karena kami bersertifikat resmi dan memiliki pengalaman yang cukup sehingga kami yakin dapat menjadi perusahaan yang unggul dan dapat diandalkan serta mampu bersaing baik secara nasional maupun global."
  },
  {
    question: "Bagaimana cara mencoba layanan kami?",
    answer: "Anda perlu memilih salah satu layanan, antara lain My Academy, MYA, atau My Beautica. Kemudian klik tombol 'Lihat' Layanan untuk menuju halaman layanan tersebut."
  },
  {
    question: "Bagaimana cara melakukan pembayaran?",
    answer: "Setelah memilih produk yang ingin dibeli. Maka lanjutkan proses pembayaran dengan melakukan transfer ke nomor rekening yang tertera, kemudian mengirim bukti transfer."
  },
];




const Home: React.FC = () => {
  return (
    <HomePage
      services={services}
      heroData={heroData}
      slides={slides}
      faqs={faqs}
    />
  );
};

export default Home;