
import React from 'react';
import ScrollToTopButton from '@/components/common/molecules/ScrollToTop';
import "../globals.css"
interface LayoutProps {
  children: React.ReactNode;
}
export const metadata = {
  title:"Bangun Bisnis Kecantikan Bersama My Academy",
  description: "Mulai perjalanan Anda membangun bisnis kecantikan dengan My Academy. Pelajari keterampilan, belanja produk kecantikan, dan pesan layanan kecantikan dalam satu aplikasi MYG."
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
