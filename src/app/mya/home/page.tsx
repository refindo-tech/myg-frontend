'use client';

import React from 'react';
import HomePage from '@components/mya/templates/HomePage';
import LoadingPage from '@/components/mya/templates/LoadingPage';
import useProducts from "@hooks/mya/useProducts";
import useTestimonies from '@/hooks/useTestimonies';

const heroData = {
  title: "Raih Kulit Sehat dan Berseri dengan MYA",
  description: "Perawatan kulit alami menjadi prioritas utama. Kami menghadirkan produk yang memastikan kulit Anda selalu tampak sehat dan bercahaya.",
  imageUrl: "/assets/images/hero/hero.png",
};


const slides = [
  "/assets/images/banners/myabanner1.jpg",
  "/assets/images/banners/myabanner2.jpg",
  "/assets/images/banners/myabanner3.jpg",
  "/assets/images/banners/myabanner4.jpg",
  "/assets/images/banners/myabanner5.jpg",
  "/assets/images/banners/myabanner6.jpg",
];

const faqs = [
  {
    question: "Apa saja manfaat menjadi Reseller atau Distributor?",
    answer: "Selain mendapatkan harga yang lebih murah, Reseller atau Distributor juga dapat poin-poin yang bisa ditukar dengan berbagai hadiah menarik seperti bimbingan marketing, produk knowledge dan bisa berkembang memiliki salon kecantikan sendiri."
  },
  {
    question: "Apa ketentuan menjadi Reseller atau Distributor?",
    answer: "<p>Berikut merupakan syarat-syarat untuk menjadi Reseller atau Distributor:</p><ol><li>- Aktif di sosial media</li><li>- Sudah menggunakan produk MYA</li><li>- Wajib jualan</li><li>- Belanja produk sampai 3 juta untuk menjadi Reseller</li><li>- Belanja produk sampai 10 juta untuk menjadi Distributor </li><li>- Menaati peraturan MYA</li></ol><p><br></p>"
  },
  {
    question: "Kenapa harus kami?",
    answer: "Karena kami bersertifikat resmi dan memiliki pengalaman yang cukup sehingga kami yakin dapat menjadi perusahaan yang unggul dan dapat diandalkan serta mampu bersaing baik secara nasional maupun global."
  },
  {
    question: "Saya memiliki pertanyaan lebih lanjut, kemana saya bisa bertanya?",
    answer: "Anda bisa bertanya atau berdiskusi lebih lanjut dengan kami melalui tombol Konsultasi pada bagian atas."
  },
];




const Home: React.FC = () => {

  const { data: faceProducts, isLoading: faceLoading } = useProducts.all({ limit: 4, category: "FACE_CARE" });
  const { data: skinProducts, isLoading: skinLoading } = useProducts.all({ limit: 4, category: "SKIN_CARE" });
  const { data: recommendedProducts, isLoading: recommendedLoading } = useProducts.all({ limit: 3, isRecommended: true });
  // console.log("recommendedProducts", recommendedProducts);
  const { data: heroProducts, isLoading: heroLoading } = useProducts.all({ limit: 1, isRecommended: true });
  // const { data: testimonies, isLoading: testimoniesLoading } = useTestimonies.all({ limit: 3 });

  const isLoading = faceLoading || skinLoading || recommendedLoading || heroLoading;
  if (isLoading) return <LoadingPage />;


  return (
    <HomePage
      heroData={heroData}
      heroProduct={heroProducts[0]}
      faceProducts={faceProducts}
      recommendedProducts={recommendedProducts}
      // skinProducts={skinProducts}
      slides={slides}
      faqs={faqs}
      // testimonials={testimonies}
    />
  );
};

export default Home;