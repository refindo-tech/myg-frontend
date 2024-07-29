import React from 'react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { rupiah } from '@/lib/mya/helpers';
import OrderService from '@/lib/mya/orderService';
import cartService from '@/lib/mya/cartService';
import CartItem from '@/types/mya/cartItem';

interface OrderSummaryProps {
  cartItems: CartItem[];
  totalProducts: number;
  subtotal: number;
  totalPayment: number;
  isCheckout?: boolean;
}

const distributorPrice = 10000000;
const agentPrice = 3000000;

const OrderSummary: React.FC<OrderSummaryProps> = ({ cartItems, totalProducts, subtotal, totalPayment, isCheckout=false }) => {

  const router = useRouter();
  const { orderProducts } = OrderService;
  const { updateCart } = cartService

  //handle checkout
  const handleCheckout = async  () => {
    try {
      //update cart
      const updateCartResponse = await updateCart(cartItems);
      if (updateCartResponse.isError) {
        console.log("Error updating cart", updateCartResponse.isError);
        return;
      }

      //create order
      const orderResponse = await orderProducts();
      if (orderResponse.isError) {
        console.log("Error creating order", orderResponse.isError);
        return;
      }

      //redirect to order page
      router.push('/mya/checkout');
    } catch (error) {
      console.log("Error checkout", error);
    }
  }

  const message = (subtotal: number) => {
    if (subtotal > distributorPrice) {
      return `Jumlah pembayaran lebih dari ${rupiah(distributorPrice)}, anda berhak mendapatkan harga distributor`;
    } else if (subtotal > agentPrice) {
      return `Jumlah pembayaran lebih dari ${rupiah(agentPrice)}, anda berhak mendapatkan harga agen`;
    } else {
      return `Jumlah pembayaran kurang dari ${rupiah(agentPrice)}, anda berhak mendapatkan harga retail`;
    }
  }

  return (
    <div className="flex flex-col w-full bg-white rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-lg font-semibold tracking-tight leading-8 text-neutral-600">Ringkasan Belanja</h2>
      <div className="flex gap-5 justify-between mt-6 text-md tracking-tight leading-5">
        <p className="text-zinc-500">Total produk</p>
        <p className="font-semibold text-right text-neutral-600">{totalProducts}</p>
      </div>
      <div className="flex gap-5 justify-between mt-6 text-md tracking-tight leading-5 whitespace-nowrap">
        <p className="text-zinc-500">Subtotal</p>
        <p className="font-semibold text-right text-neutral-600">{rupiah(subtotal)}</p>
      </div>
      <div className="flex gap-5 justify-between mt-6 text-md tracking-tight leading-5">
        <p className="text-zinc-500">Potongan</p>
        <p className="font-semibold text-right text-neutral-600">{rupiah(subtotal - totalPayment, true)}</p>
      </div>
      <div className="flex gap-5 justify-between mt-6 font-bold text-neutral-600">
        <p className="text-lg tracking-tight leading-7">Total pembayaran</p>
        <p className="text-lg text-right">{rupiah(totalPayment)}</p>
      </div>
      {/* <button className="justify-center items-center px-4 py-3 mt-6 text-base font-semibold leading-6 text-red-50 bg-rose-400 rounded-xl max-md:px-5">
        Beli sekarang
      </button> */}
      {isCheckout ? (
        <Button className="mt-6 bg-rose-400 text-white font-semibold rounded-xl px-6 py-3">Cek status pembayaran</Button>
      ) : (
        <Button className="mt-6 bg-rose-400 text-white font-semibold rounded-xl px-6 py-3" onClick={handleCheckout}>
          Beli sekarang
        </Button>
      )}
      <p className="mt-6 text-sm tracking-tight leading-5 text-rose-400">
        {message(subtotal)}
      </p>
    </div>
  );
};

export default OrderSummary;