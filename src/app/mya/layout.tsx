import React from 'react';
import ScrollToTopButton from '@/components/common/molecules/ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title:"Belanja Produk Kecantikan MYA",
  description: "Dapatkan produk kecantikan terbaik di MYA. Temukan beragam pilihan produk berkualitas untuk kebutuhan kecantikan Anda, dengan belanja mudah dan promo menarik setiap hari."
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex w-screen h-screen relative bg-white">
      
      {children}
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
