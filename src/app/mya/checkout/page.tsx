'use client';

import React, {useEffect} from 'react';
import OrderPage from '@/components/mya/templates/OrderPage';
import useOrders from '@/hooks/mya/useOrders';
import { useRouter } from 'next/navigation';
import useAuthCheck from '@/hooks/common/auth';


const Order: React.FC = () => {
  const router = useRouter();
  if (!useAuthCheck()) {
    router.push('/login');
  }

  const { data: ordersData, isLoading: ordersLoading, isError: ordersError } = useOrders.all({ limit: 10, offset: 0 });
  console.log(ordersData);

  return (
    <OrderPage orders={ordersData} />
  );
};

export default Order;