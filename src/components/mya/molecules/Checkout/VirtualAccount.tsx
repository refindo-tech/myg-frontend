import React from 'react';

interface Props {
    title?: string;
    virtualAccount: string;
}

const VirtualAccount: React.FC<Props> = ({ virtualAccount, title = 'No. Virtual account' }) => {
    // Implement your component logic here

    return (
        <div className="flex flex-col items-start gap-2 font-semibold max-md:px-5 max-md:max-w-full">
            <h2 className="text-md mt-6 tracking-tight text-neutral-600">{title}</h2>
            <div className="text-xl tracking-tighter text-red-300">{virtualAccount}</div>
        </div>
    );
};

export default VirtualAccount;