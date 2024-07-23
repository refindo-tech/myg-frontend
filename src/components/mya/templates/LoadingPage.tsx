import React from 'react';

const LoadingPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col space-x-1 text-sm justify-center items-center">

            <div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-pink-500 border-t-transparent"></div>

                {/* <div className="text-lg p-2 text-mya-600 font-semibold">
                    Loading 
                </div> */}
            </div>
        </div>
    );
};

export default LoadingPage;