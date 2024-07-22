'use client';

import React from 'react';
import HomePage from '@components/mya/templates/HomePage';

const heroData = {
  title: "Raih Kulit Sehat dan Berseri dengan MYA Beauty",
  description: "Perawatan kulit alami menjadi prioritas utama. Kami menghadirkan produk yang memastikan kulit Anda selalu tampak sehat dan bercahaya.",
  imageUrl: "/assets/images/hero/menhera.png",
};

const faceProducts = [
  {
    category: "Perawatan wajah",
    name: "Ultimate Rejuve Serum",
    views: 200,
    description: "Mengurangi kerutan pada kulit seperti habis botoks. memberikan nutrisi pada kulit dan melembabkan.",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3c58a4738ff84a3d0b7b99ae02e6ce74fc26fc19a065ee68d8cddf2d02286c4?apiKey=04edd4fc20274006b83b68624fe67059&",
    price: "Rp.120.000"
  },
  {
    category: "Perawatan wajah",
    name: "Ultimate Dermal Shield Serum",
    views: 200,
    description: "Memperbaiki skin barier kulit yang rusak dan menjaga kelembapan kulit sehingga tampak lebih lembab.",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/5077a01605ccd41eca81de9a3bdeb9864303efcadc5888b24bc1692ac067309c?apiKey=04edd4fc20274006b83b68624fe67059&",
    price: "Rp.120.000"
  },
  {
    category: "Perawatan wajah",
    name: "Ultimate Brightening Serum",
    views: 200,
    description: "Kombinasi ekslusif untuk mencerahkan, menutrisi dan menghidrasi kulit.",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/026f43fc51d84fcf38879f1b79de66ad25c9edfb53cfa1011e2f24f446a0752b?apiKey=04edd4fc20274006b83b68624fe67059&",
    price: "Rp.120.000"
  },
  {
    category: "Perawatan wajah",
    name: "Ultimate Rejuve Serum",
    views: 200,
    description: "Mengurangi kerutan pada kulit seperti habis botoks. memberikan nutrisi pada kulit dan melembabkan.",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3c58a4738ff84a3d0b7b99ae02e6ce74fc26fc19a065ee68d8cddf2d02286c4?apiKey=04edd4fc20274006b83b68624fe67059&",
    price: "Rp.120.000"
  }
];

const skinProducts = [
  {
    category: "Perawatan kulit",
    name: "Milky Mask and Moisturizer",
    views: 200,
    description: "Mengurangi kerutan pada kulit seperti habis botoks. memberikan nutrisi pada kulit dan melembabkan.",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4414680ffb796e086841f44dbce7a96d333cc4b65eb30c1142121f4e28325f3?apiKey=04edd4fc20274006b83b68624fe67059&",
    price: "Rp.120.000"
  },
  {
    category: "Perawatan kulit",
    name: "Brightening Body Serum",
    views: 200,
    description: "Pelembab tubuh ekslusif bertekstur milk dengan wangi yang manis dan lembut dari vanila.",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/55e5563cd3762a46035ab5ecc0adf925b43d2cde1e2812bec28ee04734f5ef46?apiKey=04edd4fc20274006b83b68624fe67059&",
    price: "Rp.120.000"
  },
  {
    category: "Perawatan kulit",
    name: "Luxury Body Brightening Lotion (Rose)",
    views: 200,
    description: "Pelembab tubuh esklusif bertekstur milk dengan wangi yang manis dan lembut dari rose.",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8cbc12bf1310253a2f3e73bd232b7def521c97dbb4f9b84bfdf26a531e55105a?apiKey=04edd4fc20274006b83b68624fe67059&",
    price: "Rp.120.000"
  },
  {
    category: "Perawatan kulit",
    name: "Luxury Body Brightening Lotion (Almond)",
    views: 200,
    description: "Protection ekslusif bertekstur milk dengan wangi yang manis dan lembut dari almond.",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/38a467f991a5bfa1e867352b33c8eafd9b1230f02df17d53b01106d46b2ca2ed?apiKey=04edd4fc20274006b83b68624fe67059&",
    price: "Rp.120.000"
  }
];

const recommendedProducts = [
  {
    category: "Perawatan kulit",
    name: "Brightening Body Serum",
    views: 200,
    description: "Body lotion with tone up effect + UV protection ekslusif bertekstur milk dengan wangi yang manis dan lembut dari almond. Melembabkan, meningkatkan kecerahan kulit alami dengan proteksi sinar UVA & UVB",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/55e5563cd3762a46035ab5ecc0adf925b43d2cde1e2812bec28ee04734f5ef46?apiKey=04edd4fc20274006b83b68624fe67059&",
    price: "Rp.120.000"
  },
  {
    category: "Perawatan kulit",
    name: "Luxury Body Brightening Lotion (Rose)",
    views: 200,
    description: "Pelembab tubuh eksklusif bertekstur milk dengan wangi yang manis dan lembut dari rose..",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8cbc12bf1310253a2f3e73bd232b7def521c97dbb4f9b84bfdf26a531e55105a?apiKey=04edd4fc20274006b83b68624fe67059&",
    price: "Rp.120.000"
  },
  {
    category: "Perawatan kulit",
    name: "Luxury Body Brightening Lotion (Almond)",
    views: 200,
    description: "Argireline atau dikenal dengan acetly hexapeptide-8 atau acetly  hexapeptide-3 memberikan nutrisi pada kulit dan melembabkan kulit.",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/38a467f991a5bfa1e867352b33c8eafd9b1230f02df17d53b01106d46b2ca2ed?apiKey=04edd4fc20274006b83b68624fe67059&",
    price: "Rp.120.000"
  },
];


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

const testimonials = [
  {
    quote: "MYA Beauty adalah produk perawatan kulit yang sangat membantu saya dalam merawat kulit wajah saya. Terima kasih MYA Beauty!",
    name: "Jane Doe",
    role: "Content Writer",
    avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Felix"
  },

  {
    quote: "Passion has little to do with euphoria and everything to do with patience. It is not about feeling good. It is about endurance. Like patience, passion comes from the same Latin root: pati. It does not mean to flow with exuberance. It means to suffer.",
    name: "Mark Z. Danielewski",
    role: "Rumah Kepergian",
    avatar: "https://api.dicebear.com/9.x/rings/svg"
  },

  {
    quote: "Now I have neither happiness nor unhappiness. Everything passes. That is the one and only thing that I have thought resembled a truth in the society of human beings where I have dwelled up to now as in a burning hell. Everything passes.",
    name: "Dazai Osamu",
    role: "No Longer Human",
    avatar: "https://api.dicebear.com/9.x/thumbs/svg?seed=Felix"
  },
  
];




const Home: React.FC = () => {
  return (
    <HomePage
      logo="https://cdn.builder.io/api/v1/image/assets/TEMP/3286fac76e3ba9a985929c27e761a770990e30ecdadb8c2ecd7a514c9a3db612?apiKey=04edd4fc20274006b83b68624fe67059&"
      heroData={heroData}
      faceProducts={faceProducts}
      recommendedProducts={recommendedProducts}
      skinProducts={skinProducts}
      slides={slides}
      faqs={faqs}
      testimonials={testimonials}
    />
  );
};

export default Home;