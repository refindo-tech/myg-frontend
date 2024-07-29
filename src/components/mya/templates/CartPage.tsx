import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import EmptyCart from '@/components/mya/organisms/EmptyCart';

// Components
import Header from '@components/mya/organisms/Header';
import OrderSummary from '@/components/mya/molecules/Checkout/OrderSummary';
import ProductCartSection from '@components/mya/organisms/ProductCartSection';

//type
import Cart from '@/types/mya/cart';
import CartItem from '@/types/mya/cartItem';

//Hooks
import { useSubTotalPrice, useTotalPrice, useTotalQuantity } from '@/hooks/mya/cartCalculation';

interface CartPageProps {
  productCart: Cart;
}

const CartPage: React.FC<CartPageProps> = ({ productCart }) => {
  
  const [cartItems, setCartItems] = useState<CartItem[]>(productCart.cartItems);

  const subTotalPrice = useSubTotalPrice(cartItems);
  const totalPrice = useTotalPrice(cartItems, subTotalPrice);
  const totalQuantity = useTotalQuantity(cartItems);

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
            <EmptyCart />
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
          <OrderSummary 
            cartItems={cartItems} 
            totalProducts={totalQuantity} 
            subtotal={subTotalPrice} 
            totalPayment={totalPrice} 
            isCheckout={false} />
        </aside>
      </div>
    </div>
  );
};

export default CartPage;
