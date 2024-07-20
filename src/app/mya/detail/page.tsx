'use client';

import React from 'react';
import DetailPage from '@components/mya/templates/DetailPage';


const product = {
  category: "Perawatan wajah",
  name: "Ultimate Rejuve Serum",
  views: 200,
  description: "Body lotion with tone up effect + UV protection ekslusif bertekstur milk dengan wangi yang manis dan lembut dari almond. melembabkan, meningkatkan kecerahan kulit alami yang signifikan yang dilengkapi dengan proteksi sinar UVA & UVB Niacinamide atau dikenal juga sebagai nitocinamide, adalah salah satu zat turunan dari vitamin B3 (niacin). Dalam dunia dermatologi, zat ini digunakan untuk mengatasi jerawat dan bekasnya, mencerahkan kulit, serta mengendalikan gejala rosacea. Probiobalance memberikan hidrasi kulit, menutrisi kulit, sekaligus melembabkan kulit. Mengurangi kerutan pada kulit seperti habis botoks. memberikan nutrisi pada kulit dan melembabkan.",
  image: "/assets/images/product/placeholder/a.png",
  price: "Rp.120.000"
};

const heroData = {
  title: "Raih Kulit Sehat dan Berseri dengan MYA Beauty",
  description: "Perawatan kulit alami menjadi prioritas utama. Kami menghadirkan produk yang memastikan kulit Anda selalu tampak sehat dan bercahaya.",
  image: "/assets/images/hero/menhera.png",
};

const relatedProducts = [
  {
    category: "Perawatan wajah",
    name: "Ultimate Rejuve Serum",
    views: 200,
    description: "Mengurangi kerutan pada kulit seperti habis botoks. memberikan nutrisi pada kulit dan melembabkan.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3c58a4738ff84a3d0b7b99ae02e6ce74fc26fc19a065ee68d8cddf2d02286c4?apiKey=04edd4fc20274006b83b68624fe67059&",
    price: "Rp.120.000"
  },
  {
    category: "Perawatan wajah",
    name: "Ultimate Dermal Shield Serum",
    views: 200,
    description: "Memperbaiki skin barier kulit yang rusak dan menjaga kelembapan kulit sehingga tampak lebih lembab.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5077a01605ccd41eca81de9a3bdeb9864303efcadc5888b24bc1692ac067309c?apiKey=04edd4fc20274006b83b68624fe67059&",
    price: "Rp.120.000"
  },
  {
    category: "Perawatan wajah",
    name: "Ultimate Brightening Serum",
    views: 200,
    description: "Kombinasi ekslusif untuk mencerahkan, menutrisi dan menghidrasi kulit.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/026f43fc51d84fcf38879f1b79de66ad25c9edfb53cfa1011e2f24f446a0752b?apiKey=04edd4fc20274006b83b68624fe67059&",
    price: "Rp.120.000"
  },
  {
    category: "Perawatan wajah",
    name: "Ultimate Rejuve Serum",
    views: 200,
    description: "Mengurangi kerutan pada kulit seperti habis botoks. memberikan nutrisi pada kulit dan melembabkan.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3c58a4738ff84a3d0b7b99ae02e6ce74fc26fc19a065ee68d8cddf2d02286c4?apiKey=04edd4fc20274006b83b68624fe67059&",
    price: "Rp.120.000"
  }
];





const Home: React.FC = () => {
  return (
    <DetailPage
      logo="https://cdn.builder.io/api/v1/image/assets/TEMP/3286fac76e3ba9a985929c27e761a770990e30ecdadb8c2ecd7a514c9a3db612?apiKey=04edd4fc20274006b83b68624fe67059&"
      product={product}
      heroData={heroData}
      relatedProducts={relatedProducts}
    />
  );
};

export default Home;