import React from 'react';

const PaymentMethod: React.FC = () => {
  return (
    <section className="mt-12">
      <h2 className="text-lg font-bold tracking-tight leading-7 text-neutral-600 max-md:mt-10 max-md:max-w-full">
        Metode Pembayaran
      </h2>
      <div className="flex gap-5 justify-between p-5 mt-3 text-sm font-semibold tracking-tight leading-5 rounded-2xl bg-neutral-50 text-neutral-600 max-md:flex-wrap max-md:max-w-full">
        <div className="my-auto">Bank BCA (dicek otomatis)</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/88e26b3f7f79c932d5a1826eaba43ce1f46916339557bedfc23535f6e793a9de?apiKey=04edd4fc20274006b83b68624fe67059&" alt="BCA Logo" className="shrink-0 aspect-[2.13] w-[81px]" />
      </div>
    </section>
  );
};

export default PaymentMethod;