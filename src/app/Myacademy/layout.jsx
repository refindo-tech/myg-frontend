import React from 'react';
import "../globals.css"
export const metadata = {
    title:"Bangun Bisnis Kecantikan Bersama My Academy",
    description:"Mulai perjalanan Anda membangun bisnis kecantikan dengan My Academy. Pelajari keterampilan, belanja produk kecantikan, dan pesan layanan kecantikan dalam satu aplikasi MYG."
}
const Layout = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
