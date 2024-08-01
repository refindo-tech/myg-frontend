'use client';

import React from 'react';
import CheckoutPage from '@components/mya/templates/CheckoutPage';
import LoadingPage from '@/components/mya/templates/LoadingPage';
import useOrders from '@/hooks/mya/useOrders';
import { useRouter } from 'next/navigation';

export default function Checkout({ params }: { params: { id: string } }) {
const router = useRouter();
    const { data:ordersData, isLoading:isLoadingOrder, isError:isErrorOrder } = useOrders.byId(Number(params.id));
    if (isErrorOrder) {
        router.push('/mya/checkout');
        return <LoadingPage />;
    }
    if (isLoadingOrder) return <LoadingPage />;

    //if data is empty
    if (!ordersData) return <div>No data</div>;
    return (
        <CheckoutPage
        orders={ordersData}
      />
    );
}