'use client';

import React, { useEffect } from 'react';
import OrderPage from '@/components/mya/templates/OrderPage';
import useOrders from '@/hooks/mya/useOrders';
import { useRouter } from 'next/navigation';
import useAuthCheck from '@/hooks/common/auth';
import LoadingPage from '@/components/mya/templates/LoadingPage';

const Order: React.FC = () => {
  const router = useRouter();
  const isAuth = useAuthCheck();

  useEffect(() => {
    if (isAuth === false) {
      router.push('/login');
    }
  }, [isAuth, router]);

  const { data: ordersData, isLoading: ordersLoading, isError: ordersError } = useOrders.all({ limit: 10, offset: 0 });

  if (isAuth === null || ordersLoading) {
    return <LoadingPage />;
  }

  if (ordersError) {
    return <div>Error loading orders</div>;
  }

  return (
    <OrderPage orders={ordersData} />
  );
};

export default Order;
