import React from 'react';
import OrderListCard from '@/components/mya/molecules/OrderListCard';
import Order from '@/types/mya/order';

interface OrderListSectionProps {
    orders: Order[];
}

// Turn 2024-07-29 23:52:22.866 into 29 Juli 2024


const OrderListSection: React.FC<OrderListSectionProps> = ({ orders }) => {
    // Implement your component logic here

    return (
        <section className="w-full max-w-[1420px] mx-auto bg-white p-8 xl:px-32 justify-center items-center">
            <div className="flex justify-center items-center px-16 max-w-full max-md:px-5 max-md:mt-10">
                <div className="space-y-6 border-l-2 border-dashed w-full md:w-[70%] ">

                {/* <OrderListCard /> */}
                {orders.map((order, index) => (
                    <OrderListCard key={index} order={order} />
                ))}

                </div>

            </div>

        </section>
    );
};

export default OrderListSection;