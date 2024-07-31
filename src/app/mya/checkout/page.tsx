'use client';

import React from 'react';
import OrderPage from '@/components/mya/templates/OrderPage';
import useOrders from '@/hooks/mya/useOrders';
import { useRouter } from 'next/navigation';

import { isAuthenticated } from '@/helpers/auth';


const Order: React.FC = () => {

  // const router = useRouter();
  // if (!isAuthenticated()) {
  //   router.push('/login');
  //   return null;
  // }

  const { data: ordersData, isLoading: ordersLoading, isError: ordersError } = useOrders.all({ limit: 10, offset: 0 });
  console.log(ordersData);

  return (
    <OrderPage orders={ordersData} />
  );
};

export default Order;