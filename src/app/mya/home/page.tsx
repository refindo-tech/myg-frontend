'use client';

import React from 'react';
import HomePage from '@components/mya/templates/HomePage';
import LoadingPage from '@/components/mya/templates/LoadingPage';
import useProducts from "@hooks/mya/useProducts";
import useTestimonies from '@/hooks/useTestimonies';

const heroData = {
  title: "Raih Kulit Sehat dan Berseri dengan MYA Beauty",
  description: "Perawatan kulit alami menjadi prioritas utama. Kami menghadirkan produk yang memastikan kulit Anda selalu tampak sehat dan bercahaya.",
  imageUrl: "/assets/images/hero/hero.png",
};


const slides = [
  "/assets/images/banners/Ultimate Brightening Serum.jpg",
  "/assets/images/banners/Milky Infused Nutrition.jpg",
  "/assets/images/banners/Brightening Body Serum Night.jpg",
];

const faqs = [
  {
    question: "Apa saja manfaat menjadi Reseller atau Distributor?",
    answer: "Selain mendapatkan harga yang lebih murah, Reseller atau Distributor juga dapat poin-poin yang bisa ditukar dengan berbagai hadiah menarik seperti bimbingan marketing, produk knowledge dan bisa berkembang memiliki salon kecantikan sendiri."
  },
  {
    question: "Apa ketentuan menjadi Reseller atau Distributor?",
    answer: "Aktif di sosial media. Sudah menggunakan produk MYA. Wajib jualan. Belanja produk 3 juta untuk menjadi Reseller, atau 10 juta untuk menjadi Distributor. Menaati peraturan MYA"
  },
  {
    question: "Bagaimana cara membeli produk kami?",
    answer: "Anda perlu melakukan pendaftaran akun terlebih dahulu dengan mengisi data yang diperlukan, dan membaca syarat dan ketentuan yang berlaku. Setelah itu memilih produk dengan memasukkannya ke dalam keranjang, lalu dilanjutkan dengan melukakan pembayaran."
  },
  {
    question: "Bagaimana cara melakukan pembayaran?",
    answer: "Setelah memilih produk yang ingin dibeli. Maka lanjutkan proses pembayaran dengan melakukan transfer ke nomor rekening yang tertera, kemudian mengirim bukti transfer."
  },
];




const Home: React.FC = () => {

  const { data: faceProducts, isLoading: faceLoading } = useProducts.all({ limit: 4, category: "FACE_CARE" });
  const { data: skinProducts, isLoading: skinLoading } = useProducts.all({ limit: 4, category: "SKIN_CARE" });
  const { data: recommendedProducts, isLoading: recommendedLoading } = useProducts.all({ limit: 3, isRecommended: true });
  // console.log("recommendedProducts", recommendedProducts);
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