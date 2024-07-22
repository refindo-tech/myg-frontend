import React from 'react';
import { Input, Textarea } from '@nextui-org/react';

const BuyerInfo: React.FC = () => {
  return (
    <section className="flex flex-col w-full">
      <h2 className="self-start text-lg font-bold tracking-tight leading-7 text-neutral-600">
        Informasi Pembeli
      </h2>
      <p className="self-start mt-1 text-xs font-medium tracking-tight leading-5 text-zinc-500">
        Tolong lengkapi data dibawah ini
      </p>
      <div className="flex gap-5 justify-between mt-5 max-md:flex-wrap max-md:max-w-full">
        {/* <div className="flex flex-col justify-center items-start px-3 py-2.5 rounded-2xl shadow-sm bg-neutral-50 max-md:pr-5">
          <label htmlFor="name" className="text-sm leading-6 text-zinc-600">Nama</label>
          <input id="name" type="text" value="John doe" readOnly className="mt-2 text-base max-w-[256px] text-zinc-500 bg-transparent border-none" />
        </div> */}
        <Input
          label="Nama"
          placeholder="Masukkan nama lengkap"
          value="John Doe"
          className = "max-md:pr-5"
          readOnly
        />
        {/* <div className="flex flex-col justify-center items-start px-3 py-2.5 rounded-lg shadow-sm bg-neutral-50 max-md:pr-5">
          <label htmlFor="phone" className="text-sm leading-6 text-zinc-600">Nomor telepon</label>
          <input id="phone" type="tel" value="082373647728" readOnly className="mt-1.5 text-base max-w-[256px] text-zinc-500 bg-transparent border-none" />
        </div> */}
        <Input
          label="Nomor telepon"
          placeholder="Masukkan nomor telepon"
          value="082373647728"
          className="max-md:pr-5"
          readOnly
        />
      </div>
      {/* <div className="flex flex-col justify-center items-start px-3.5 py-3 mt-5 rounded-lg border-2 border-solid shadow-sm border-zinc-200 max-md:pr-5 max-md:max-w-full">
        <label htmlFor="address" className="text-sm leading-6 text-rose-400">Alamat</label>
        <input id="address" type="text" value="Kelurahan kalibata, 14" readOnly className="mt-1.5 text-base max-w-[252px] text-zinc-500 bg-transparent border-none" />
      </div> */}
    <Textarea
      label="Alamat"
      placeholder="Masukkan alamat lengkap"
      classNames = {{
        base: "mt-5",
        label: "text-lg text-rose-400",
      }}
    />
    </section>
  );
};

export default BuyerInfo;