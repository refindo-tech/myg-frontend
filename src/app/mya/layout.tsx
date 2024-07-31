import React from 'react';
import ScrollToTopButton from '@/components/common/molecules/ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
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
