import React from 'react';
import "../globals.css"
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex w-screen h-screen relative bg-white">
      {children}
    </div>
  );
};

export default Layout;
