import React from 'react';

type RegistrationTitleProps = {
  title: string;
  subtitle: string;
};

const RegistrationTitle: React.FC<RegistrationTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="flex justify-center items-center px-16 mt-28 max-w-full max-md:px-5 max-md:mt-10">
      <div className="flex flex-col max-md:max-w-full">
        <h1 className="text-4xl font-semibold text-zinc-700 max-md:max-w-full text-center">
            {title}
            </h1>
        <p className="mx-6 mt-3 text-xl leading-7 text-zinc-600 max-md:mr-2.5 max-md:max-w-full text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default RegistrationTitle;