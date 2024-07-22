import React from 'react';

interface Props {
    virtualAccount: string;
}

const VirtualAccount: React.FC<Props> = ({ virtualAccount }) => {
    // Implement your component logic here

    return (
        <div className="flex flex-col items-start gap-2 font-semibold max-md:px-5 max-md:max-w-full">
            <h2 className="text-md mt-6 tracking-tight text-neutral-600">No. Virtual account</h2>
            <div className="text-xl tracking-tighter text-red-300">{virtualAccount}</div>
        </div>
    );
};

export default VirtualAccount;