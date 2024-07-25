import React from 'react';
import Header from '@components/mya/organisms/Header';
import TermSection from '@/components/mya/organisms/TermSection';

interface TermPageProps {
    logo: string;
}

const TermPage: React.FC<TermPageProps> = ({ logo }) => {
    // Implement your component logic here

    return (
        <div className="flex flex-col h-full bg-white w-screen">
        <Header logo={logo} />
        <main className="flex flex-col w-full">
          <TermSection />
        </main>
          {/* <Footer /> */}
      </div>
    );
};

export default TermPage;