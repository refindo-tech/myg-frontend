import React from 'react';
import Image from 'next/image';

import Header from '@components/mya/organisms/Header';
import Hero from '@components/mya/organisms/Hero';
import ProductSection from '@components/mya/organisms/ProductSection';
import CarouselSection from '@components/mya/organisms/CarouselSection';
import RecommendationSection from '@components/mya/organisms/RecommendationSection';
import FAQSection from '@components/mya/organisms/FAQSection';
import TestimonialSection from '@/components/organism/TestimonialSection';
import Footer from '@components/mya/organisms/Footer';

interface HomePageProps {
  logo: string;
  faceProducts: any[];
  skinProducts: any[];
  recommendedProducts: any[];
  slides: string[];
  faqs: any[];
  // testimonials?: any[];
  heroData: any;
  heroProduct: any;
}

const HomePage: React.FC<HomePageProps> = ({ logo, faceProducts, skinProducts, recommendedProducts, slides, faqs, heroData, heroProduct }) => {
  return (
    <div className="flex flex-col h-full bg-white w-screen">
      <Header logo={logo} />
      <main className="flex flex-col w-full">
        <Hero heroData={heroData} showcaseProduct={heroProduct} />
        <div id="produk" />
        <ProductSection title="Perawatan wajah" products={faceProducts} />
        <CarouselSection autoSlide={true} >
          {[...slides.map((s,index) => (
            <img src={s} key={index} className="object-cover" />
          ))]}
        </CarouselSection>
        <ProductSection title="Perawatan kulit" products={skinProducts} />
        <RecommendationSection title="Produk rekomendasi" recommendedProducts={recommendedProducts} />
        <FAQSection faqs={faqs} />
        <TestimonialSection />
      </main>
      <Footer />
      
    </div>
  );
};

export default HomePage;