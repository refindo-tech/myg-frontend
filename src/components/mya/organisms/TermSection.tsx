import React from 'react';
import RegistrationTitle from '@/components/mya/molecules/Register/RegistrationTitle';
import RegistrationForm from '@/components/mya/molecules/Register/RegistrationForm';

const RegistrationPage: React.FC = () => {
  const navItems = ['Home', 'Syarat dan Ketentuan', 'Konsultasi'];

  return (
    <section className="w-full max-w-[1420px] mx-auto bg-white p-8 xl:px-32 justify-center items-center">
     <RegistrationTitle
        title="Syarat dan Ketentuan"
        subtitle="Lengkapi data berikut untuk melanjutkan pendaftaran"
      />
      <RegistrationForm />
    </section>
  );
};

export default RegistrationPage;