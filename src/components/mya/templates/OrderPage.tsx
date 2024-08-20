import React from 'react';
import Header from '@components/mya/organisms/Header';
import TermSection from '@/components/mya/organisms/TermSection';
import OrderListSection from '@/components/mya/organisms/OrderListSection';
import Order from '@/types/mya/order';
import EmptyCart from '@/components/mya/organisms/EmptyCart';

interface OrderPageProps {
    orders: Order[];
}

const OrderPage: React.FC<OrderPageProps> = ({ orders }) => {
    // Implement your component logic here

    if (orders.length === 0) {
      return (
        <div className="flex flex-col h-full bg-white w-screen">
          <Header />
          <div className="flex flex-grow flex-col lg:flex-row px-8 lg:px-32 py-8">
            <main className="flex lg:w-[70%] mx-auto flex-grow justify-center">
              <EmptyCart isOrder />
            </main>
          </div>
        </div>
      );
    }

    return (
        <div className="flex flex-col h-full bg-white w-screen">
        <Header/>
        <main className="flex flex-col w-full">
          <OrderListSection orders={orders} />
        </main>
          {/* <Footer /> */}
      </div>
    );
};

export default OrderPage;