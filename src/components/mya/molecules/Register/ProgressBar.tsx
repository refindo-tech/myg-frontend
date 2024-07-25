import React from 'react';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-center items-center px-16 pb-8 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-w-full">
        {Array.from({ length: totalSteps }, (_, index) => (
          <React.Fragment key={index}>
            <div className={`px-3 text-base pt-0.5 rounded-full h-8 w-8 ${
              index + 1 <= currentStep ? 'bg-rose-400 text-white' : 'bg-gray-100 text-slate-500'
            }`}>
              {index + 1}
            </div>
            {index < totalSteps - 1 && (
              <div className="flex flex-col justify-center my-auto bg-gray-100 rounded-[40px]">
                <div className={`shrink-0 h-1.5 ${
                  index + 1 < currentStep ? 'bg-rose-400' : 'bg-gray-100'
                } rounded-[40px] w-[98px]`} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;