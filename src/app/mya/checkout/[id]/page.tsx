'use client';

import React from 'react';
import CheckoutPage from '@components/mya/templates/CheckoutPage';
import LoadingPage from '@/components/mya/templates/LoadingPage';
import useOrders from '@/hooks/mya/useOrders';

export default function Checkout({ params }: { params: { id: string } }) {
    const { data:ordersData, isLoading:isLoadingOrder, isError:isErrorOrder } = useOrders.byId(Number(params.id));
    if (isErrorOrder) return <div>Something went wrong</div>;
    if (isLoadingOrder) return <LoadingPage />;
    return (
        <CheckoutPage
        orders={ordersData}
      />
    );
}