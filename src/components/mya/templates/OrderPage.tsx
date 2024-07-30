import React from 'react';
import Header from '@components/mya/organisms/Header';
import TermSection from '@/components/mya/organisms/TermSection';
import OrderListSection from '@/components/mya/organisms/OrderListSection';
import Order from '@/types/mya/order';

interface OrderPageProps {
    orders: Order[];
}

const OrderPage: React.FC<OrderPageProps> = ({ orders }) => {
    // Implement your component logic here

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