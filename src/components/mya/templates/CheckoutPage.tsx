/**
 * This code was generated by Builder.io.
 */
import React from 'react';

import Header from '@components/mya/organisms/Header';

// import OrderSummary from '@/components/mya/molecules/Checkout/OrderSummary';
import CheckoutSummary from '@/components/mya/molecules/Checkout/CheckoutSummary';
import VirtualAccount from '@/components/mya/molecules/Checkout/VirtualAccount';
import TransferGuide from '@/components/mya/molecules/Checkout/TransferGuide';
import PaymentSuccess from '@/components/mya/molecules/Checkout/PaymentSuccess';
import ProductPaymentSection from '@/components/mya/organisms/ProductCheckoutSection';

import Order from '@/types/mya/order';

interface CheckoutPageProps {
  orders: Order;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ orders }) => {

  //calculate total quantity
  const totalQuantity = orders.orderItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div className="flex flex-col h-full bg-white w-screen">
      <Header />
      <div className="flex flex-grow flex-col lg:flex-row px-8 lg:px-32 py-8">
      <main className="flex lg:w-[70%] mx-auto flex-grow">
        <ProductPaymentSection orderItems={orders.orderItems} userProfile={orders.user.userProfiles[0]} />
      </main>
      <hr className="w-full lg:w-[70%] lg:hidden mx-auto border-t border-gray-300 my-8" />
      <aside className="w-full lg:w-[30%] mx-auto">
        <VirtualAccount virtualAccount='1234567890' title='Nomor Rekening BCA' />
        <hr className="w-full border-t border-gray-300 my-6" />
        <CheckoutSummary totalProducts={totalQuantity} subtotal={44} totalPayment={orders.totalAmount} status={orders.status} code={orders.code} />
        <hr className="w-full border-t border-gray-300 my-6" />
        <TransferGuide />
        <hr className="w-full border-t border-gray-300 my-6" />
        {/* <PaymentSuccess /> */}

      </aside>
      </div>
        {/* <Footer /> */}
    </div>
  );
};

export default CheckoutPage;