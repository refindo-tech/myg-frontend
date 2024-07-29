import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';

import Header from '@components/mya/organisms/Header';

import OrderSummary from '@/components/mya/molecules/Checkout/OrderSummary';
import ProductCartSection from '@components/mya/organisms/ProductCartSection';
import Cart from '@/types/mya/cart';
import CartItem from '@/types/mya/cartItem';

interface CartPageProps {
  productCart: Cart;
}

const distributorPrice = 10000000;
const agentPrice = 3000000;

const CartPage: React.FC<CartPageProps> = ({ productCart }) => {
  const router = useRouter();

  const [cartItems, setCartItems] = useState<CartItem[]>(productCart.cartItems);
  const [subTotalPrice, setSubTotalPrice] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  // Calculate subtotal
  useEffect(() => {
    const subTotal = cartItems.reduce((acc, item) => {
      return acc + item.product.price.RETAIL * item.quantity;
    }, 0);
    setSubTotalPrice(subTotal);
  }, [cartItems]);

  // Calculate total price based on subtotal
  useEffect(() => {
    let total = 0;
    if (subTotalPrice > distributorPrice) {
      total = cartItems.reduce((acc, item) => {
        return acc + item.product.price.DISTRIBUTOR * item.quantity;
      }, 0);
    } else if (subTotalPrice > agentPrice) {
      total = cartItems.reduce((acc, item) => {
        return acc + item.product.price.AGENT * item.quantity;
      }, 0);
    } else {
      total = subTotalPrice;
    }
    setTotalPrice(total);
  }, [subTotalPrice, cartItems]);

  // Calculate total quantity
  useEffect(() => {
    const totalQty = cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setTotalQuantity(totalQty);
  }, [cartItems]);

  const updateCartItemQuantity = (productId: number, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col h-full bg-white w-screen">
        <Header />
        <div className="flex flex-grow flex-col lg:flex-row px-8 lg:px-32 py-8">
          <main className="flex lg:w-[70%] mx-auto flex-grow justify-center">
            <div className="flex flex-col justify-center p-5 text-center bg-red-50 shadow-md max-w-[447px] rounded-[32px]">
              <img
                src="/assets/images/icons/bag.svg"
                alt="Success icon"
                className="self-center max-w-full aspect-[0.93] w-[167px]"
              />
              <h1 className="text-2xl font-bold leading-9 text-zinc-800">
                Keranjang Anda kosong
              </h1>
              <p className="mt-3 text-lg leading-8 text-default-500">
                Yuk, belanja sekarang dan temukan produk yang Anda sukai!
              </p>

              <Button className="mt-6 bg-rose-400 text-white font-semibold rounded-xl px-6 py-3" onClick={() => router.push('/mya')}>
                Belanja Sekarang
              </Button>


            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white w-screen">
      <Header />
      <div className="flex flex-grow flex-col lg:flex-row px-8 lg:px-32 py-8">
        <main className="flex lg:w-[70%] mx-auto flex-grow">
          <ProductCartSection cartItems={cartItems} updateCartItemQuantity={updateCartItemQuantity} />
        </main>
        <hr className="w-full lg:w-[70%] lg:hidden mx-auto border-t border-gray-300 my-8" />
        <aside className="w-full lg:w-[30%] mx-auto">
          <OrderSummary cartItems={cartItems} totalProducts={totalQuantity} subtotal={subTotalPrice} totalPayment={totalPrice} isCheckout={false} />
        </aside>
      </div>
    </div>
  );
};

export default CartPage;
