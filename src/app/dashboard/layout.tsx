
import React from 'react';
import ScrollToTopButton from '@/components/common/molecules/ScrollToTop';
import "../globals.css"
interface LayoutProps {
  children: React.ReactNode;
}
export const metadata = {
  title:"Pelatihan Kecantikan My Academy",
  description: "Tingkatkan keterampilan kecantikan Anda dengan pelatihan dari My Academy. Pelajari teknik profesional dan dapatkan sertifikasi untuk memulai atau mengembangkan bisnis kecantikan Anda."
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
