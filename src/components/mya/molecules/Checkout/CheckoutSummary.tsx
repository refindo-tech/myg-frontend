import React from 'react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { rupiah } from '@/lib/mya/helpers';
import CartItem from '@/types/mya/cartItem';

interface CheckoutSummaryProps {
  subtotal: number;
  totalProducts: number;
  totalPayment: number;
  status: string;
  isCheckout?: boolean;
  code: string;
}

const distributorPrice = 10000000;
const agentPrice = 3000000;

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({subtotal, totalProducts, totalPayment, status, code, isCheckout=true }) => {

  const router = useRouter();

  const message = (subtotal: number) => {
    if (subtotal > distributorPrice) {
      return `Jumlah pembayaran lebih dari ${rupiah(distributorPrice)}, anda berhak mendapatkan harga distributor`;
    } else if (subtotal > agentPrice) {
      return `Jumlah pembayaran lebih dari ${rupiah(agentPrice)}, anda berhak mendapatkan harga agen`;
    } else {
      return ``;
    }
  }

  //Handle Konfirmasi Pembayaran, open whatsapp with the important data
    const handleConfirmPayment = () => {
        const phone = '62895620930010';
        const message = `Halo, saya ingin konfirmasi pembayaran dengan kode pesanan ${code} sebesar ${rupiah(totalPayment)}`;
        const url = `https://wa.me/${phone}?text=${message}`;
        // router.push(url);
        window.open(url, '_blank');
    }

  return (
    <div className="flex flex-col w-full bg-white rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-lg font-semibold tracking-tight leading-8 text-neutral-600">Ringkasan Belanja</h2>
      {/* <div className="flex gap-5 justify-between mt-6 text-md tracking-tight leading-5">
        <p className="text-zinc-500">Total produk</p>
        <p className="font-semibold text-right text-neutral-600">44</p>
      </div> */}
      <div className="flex gap-5 justify-between mt-6 text-md tracking-tight leading-5 whitespace-nowrap">
        <p className="text-zinc-500">Kode Pesanan</p>
        <p className="font-semibold text-right text-green-300">{code}</p>
      </div>
      <div className="flex gap-5 justify-between mt-6 text-md tracking-tight leading-5">
        <p className="text-zinc-500">Status Pesanan</p>
        <p className="font-semibold text-right text-neutral-600"> {status} </p>
      </div>
      <div className="flex gap-5 justify-between mt-6 text-md tracking-tight leading-5">
        <p className="text-zinc-500">Total produk</p>
        <p className="font-semibold text-right text-neutral-600">{totalProducts}</p>
      </div>
      <div className="flex gap-5 justify-between mt-6 font-bold text-neutral-600">
        <p className="text-lg tracking-tight leading-7">Total pembayaran</p>
        <p className="text-lg text-right">{rupiah(totalPayment)}</p>
      </div>
      {/* <button className="justify-center items-center px-4 py-3 mt-6 text-base font-semibold leading-6 text-red-50 bg-rose-400 rounded-xl max-md:px-5">
        Beli sekarang
      </button> */}
      {isCheckout ? (
        <Button className="mt-6 bg-rose-400 text-white font-semibold rounded-xl px-6 py-3" onClick={handleConfirmPayment}>
            Konfirmasi Pembayaran
            </Button>
      ) : (
        <Button className="mt-6 bg-rose-400 text-white font-semibold rounded-xl px-6 py-3">
          Beli sekarang
        </Button>
      )}
      <p className="mt-6 text-sm tracking-tight leading-5 text-rose-400">
        {message(subtotal)}
      </p>
    </div>
  );
};

export default CheckoutSummary;