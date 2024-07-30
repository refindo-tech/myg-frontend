import React from 'react';
import { Button } from '@nextui-org/button';
import Order from '@/types/mya/order';
import { useRouter } from 'next/navigation';

import { rupiah, formatDate } from '@/lib/mya/helpers';

interface OrderListCardProps {
    order: Order;
}

const OrderListCard: React.FC<OrderListCardProps> = ({ order }) => {
    const router = useRouter();
    const handleOrderDetail = () => {
        router.push(`/mya/checkout/${order.orderId}`);
    }

    const statusColor = () => {
        switch (order.status) {
            case 'PENDING':
                return 'text-yellow-500';
            case 'PAID':
                return 'text-green-500';
            case 'SHIPPED':
                return 'text-blue-500';
            case 'CANCELLED':
                return 'text-red-500';
            case 'DELIVERED':
                return 'text-green-500';
            default:
                return 'text-gray-500';
        }
    }

    return (
        <>
            <div className="relative w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full ${statusColor()}`}>
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                        </svg>
                        <div className="ml-6">
                            <h4 className="font-bold text-rose-400">{order.code}</h4>

                            <div className="flex items-center mt-1">
                                <span className="block text-sm font-semibold text-gray-500">Status Transaksi</span>
                                <span className={`ml-2 text-sm font-semibold ${statusColor()}`}>
                                    {order.status}
                                    </span>
                            </div>

                            <div className="flex items-center mt-1">
                                <span className="block text-sm font-semibold text-gray-500">Total Pembayaran</span>
                                <span className="ml-2 text-sm font-semibold text-rose-500">{rupiah(order.totalAmount)}</span>
                            </div>

                            <span className="mt-1 block text-sm font-semibold text-rose-500">
                                {formatDate('2024-07-29 23:52:22.866')}
                            </span>
                        </div>

                        <div className="flex flex-col items-end justify-between h-full absolute right-0 top-0">
                            <Button size="md" className="bg-mya-600 w-full text-mya-100 font-semibold" onClick={handleOrderDetail}>
                                Lihat Detail
                            </Button>
                            <Button size="md" variant="solid" className="bg-mya-600 w-full text-mya-100 font-semibold mt-2">
                                Cetak
                            </Button>
                        </div>
                    </div>
                    <hr className="mt-6 border-t-2 border-dashed" />
        </>
    );
};

export default OrderListCard;