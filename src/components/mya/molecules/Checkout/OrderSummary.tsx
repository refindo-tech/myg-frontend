import React from 'react';
import { Button } from '@nextui-org/react';

interface OrderSummaryProps {
  totalProducts: number;
  subtotal: string;
  totalPayment: string;
  isCheckout?: boolean;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ totalProducts, subtotal, totalPayment, isCheckout=false }) => {
  return (
    <div className="flex flex-col w-full bg-white rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-lg font-semibold tracking-tight leading-8 text-neutral-600">Ringkasan Belanja</h2>
      <div className="flex gap-5 justify-between mt-6 text-md tracking-tight leading-5">
        <p className="text-zinc-500">Total produk</p>
        <p className="font-semibold text-right text-neutral-600">{totalProducts}</p>
      </div>
      <div className="flex gap-5 justify-between mt-6 text-md tracking-tight leading-5 whitespace-nowrap">
        <p className="text-zinc-500">Subtotal</p>
        <p className="font-semibold text-right text-neutral-600">{subtotal}</p>
      </div>
      <div className="flex gap-5 justify-between mt-6 font-bold text-neutral-600">
        <p className="text-lg tracking-tight leading-7">Total pembayaran</p>
        <p className="text-lg text-right">{totalPayment}</p>
      </div>
      {/* <button className="justify-center items-center px-4 py-3 mt-6 text-base font-semibold leading-6 text-red-50 bg-rose-400 rounded-xl max-md:px-5">
        Beli sekarang
      </button> */}
      {isCheckout ? (
        <Button className="mt-6 bg-rose-400 text-white font-semibold rounded-xl px-6 py-3">Cek status pembayaran</Button>
      ) : (
        <Button className="mt-6 bg-rose-400 text-white font-semibold rounded-xl px-6 py-3">Beli sekarang</Button>
      )}
      <p className="mt-6 text-sm tracking-tight leading-5 text-rose-400">
        Jumlah pembayaran kurang dari Rp.10.000.000,00 harga berubah menjadi harga retail.
      </p>
    </div>
  );
};

export default OrderSummary;