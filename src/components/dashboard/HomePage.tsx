import React from 'react';

//common component
import CarouselSection from '@/components/common/organism/CarouselSection';
import FAQSection from '@/components/common/organism/FAQSection';
import TestimonialSection from '@/components/common/organism/TestimonialSection';

//dashboard component
import Header from '@/components/dashboard/organism/Header';
import Hero from '@/components/dashboard/organism/Hero';
import ServiceSection from '@/components/dashboard/organism/ServiceSection';
import Footer from '@components/mya/organisms/Footer';

interface HomePageProps {
  slides: string[];
  faqs: any[];
  heroData: any;
  services: any[];
}


const HomePage: React.FC<HomePageProps> = ({ heroData, slides, faqs, services }) => {
  return (
    <div className="flex flex-col h-full bg-white w-screen">
      <Header/>
      <main className="flex flex-col w-full">
        <Hero heroData={heroData} />
        <CarouselSection autoSlide={true} >
          {[...slides.map((s,index) => (
            <img src={s} key={index} className="object-cover" />
          ))]}
        </CarouselSection>
        <ServiceSection title='Layanan yang tersedia' services={services} />
        <FAQSection faqs={faqs} service='myg' />
        <TestimonialSection service='myg' />
      </main>
      <Footer />
      
    </div>
  );
};

export default HomePage;