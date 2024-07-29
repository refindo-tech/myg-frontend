'use client';

import React from 'react';
import HomePage from '@components/mya/templates/HomePage';
import LoadingPage from '@/components/mya/templates/LoadingPage';
import useProducts from "@hooks/mya/useProducts";
import useTestimonies from '@/hooks/useTestimonies';

const heroData = {
  title: "Raih Kulit Sehat dan Berseri dengan MYA Beauty",
  description: "Perawatan kulit alami menjadi prioritas utama. Kami menghadirkan produk yang memastikan kulit Anda selalu tampak sehat dan bercahaya.",
  imageUrl: "/assets/images/hero/menhera.png",
};


const slides = [
  "/assets/images/banners/banner1.jpg",
  "/assets/images/banners/banner2.jpg",
  "/assets/images/banners/banner3.jpg",
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

  const { data: faceProducts, isLoading: faceLoading } = useProducts.all({ limit: 4, category: "FACE_CARE" });
  const { data: skinProducts, isLoading: skinLoading } = useProducts.all({ limit: 4, category: "SKIN_CARE" });
  const { data: recommendedProducts, isLoading: recommendedLoading } = useProducts.all({ limit: 3 });
  const { data: heroProducts, isLoading: heroLoading } = useProducts.all({ limit: 1 });
  // const { data: testimonies, isLoading: testimoniesLoading } = useTestimonies.all({ limit: 3 });

  const isLoading = faceLoading || skinLoading || recommendedLoading || heroLoading;
  if (isLoading) return <LoadingPage />;


  return (
    <HomePage
      heroData={heroData}
      heroProduct={heroProducts[0]}
      faceProducts={faceProducts}
      recommendedProducts={recommendedProducts}
      skinProducts={skinProducts}
      slides={slides}
      faqs={faqs}
      // testimonials={testimonies}
    />
  );
};

export default Home;