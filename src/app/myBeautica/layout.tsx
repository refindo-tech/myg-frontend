import React from 'react';
import "../globals.css"
interface LayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title:"Konsultasi dan Perawatan Kecantikan My Beautica",
  description:"Jelajahi layanan kecantikan profesional di My Beautica. Konsultasikan masalah kecantikan Anda, pesan perawatan, dan tingkatkan rasa percaya diri dengan layanan terbaik kami."
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex w-screen h-screen relative bg-white">
      {children}
    </div>
  );
};

export default Layout;
