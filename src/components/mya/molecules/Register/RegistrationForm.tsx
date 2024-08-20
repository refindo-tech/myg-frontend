import React from 'react';
import ProgressBar from './ProgressBar';
import DistributorRequirements from './DistributorReq';
import ResellerReq from './ResellerReq';

const RegistrationForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center px-16 max-w-full max-md:px-5 max-md:mt-10">
      <div className="flex flex-col p-8 mt-9 max-w-full bg-white shadow-lg rounded-[32px] w-[715px] max-md:px-5 justify-center items-center">
        {/* <ProgressBar currentStep={3} totalSteps={3} /> */}
        <ResellerReq />
        <hr className="my-6 border-mya-500" />
        <DistributorRequirements />
        {/* <button
        type="submit"
        className="self-end px-4 py-2 mt-6 text-base font-semibold leading-6 text-white whitespace-nowrap bg-rose-400 rounded-xl"
      >
        Selanjutnya
      </button> */}
      </div>
    </div>
  );
};

export default RegistrationForm;