'use client';

import React from 'react';
import HomePage from '@/components/dashboard/HomePage';

const heroData = {
  title: "Bergabunglah dengan kami di Yayasan Multi Yasykur Global",
  description: "Lihat layanan yang ada yaitu My Academy (MYA) dan My Beautica. Layanan kecantikan kami mencakup akademi kecantikan, produk kecantikan, hingga layanan kecantikan langsung.",
  imageUrl: "/assets/images/hero/myg.jpg",
};


const slides = [
  "/assets/images/banners/Ultimate Brightening Serum.jpg",
  "/assets/images/banners/Milky Infused Nutrition.jpg",
  "/assets/images/banners/Brightening Body Serum Night.jpg",
];

const services = [
  {
    name: "MyAcademy",
    logo: "/assets/images/logo/myAcademy.png",
    description: "Berjayalah di bisnis kecantikan bersama kami.",
    image: "/assets/images/services/myAcademy.jpg",
  },
  {
    name: "MYA",
    logo: "/assets/images/logo/mya.png",
    description: "Kami menghadirkan produk berkualitas untuk nutrisi dan menjaga kesehatan kulit anda agar selalu sehat, bercahaya & awet muda.",
    image: "/assets/images/services/mya.jpg",
  },
  {
    name: "MyBeautica",
    logo: "/assets/images/logo/myBeautica.png",
    description: "Pelayanan kecantikan eksklusif inovatif dengan alat paling mutakhir.",
    image: "/assets/images/services/myBeautica.jpg",
  },
];

const faqs = [
  {
    question: "Apa itu MYA Beauty?",
    answer: "MYA Beauty adalah brand lokal yang memproduksi produk perawatan kulit dan wajah alami dengan kualitas terbaik."
  },
  {
    question: "Apakah produk MYA Beauty aman digunakan?",
    answer: "Ya, produk MYA Beauty telah terdaftar di BPOM dan aman digunakan untuk semua jenis kulit."
  },
  {
    question: "Apakah MYA Beauty menerima pembelian grosir?",
    answer: "Ya, MYA Beauty menerima pembelian grosir dengan harga khusus."
  },
  {
    question: "Bagaimana cara memesan produk MYA Beauty?",
    answer: "Anda bisa memesan produk MYA Beauty melalui website ini atau menghubungi kontak kami."
  },
  {
    question: "Apakah One Piece itu nyata?",
    answer: "Ya, One Piece itu nyata."
  },
  {
    question: "One Piece bosenin, kebanyakan episodenya.",
    answer: "Ya, bener juga sih."
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