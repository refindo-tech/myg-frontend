import React from 'react';

const VisitorCounter: React.FC = () => {
  return (
    <div className="flex flex-col p-5 mt-44 max-w-full rounded-3xl bg-neutral-50 text-zinc-500 w-[302px] max-md:mt-10">
      <div className="flex gap-4 text-base">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2f88950617d6229f2a461377aa82408a4505f3b8436f382fc48ac3c0b9d6e23?apiKey=04edd4fc20274006b83b68624fe67059&&apiKey=04edd4fc20274006b83b68624fe67059" alt="Visitor icon" className="shrink-0 w-6 aspect-square" />
        <div>Total Pengunjung</div>
      </div>
      <div className="text-4xl">
        <span className="text-5xl">210</span>{" "}
        <span className="text-3xl">Pengunjung</span>
      </div>
    </div>
  );
};

export default VisitorCounter;