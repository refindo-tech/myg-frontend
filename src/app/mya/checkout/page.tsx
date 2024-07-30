'use client';

import React from 'react';
import OrderPage from '@/components/mya/templates/OrderPage';
import useOrders from '@/hooks/mya/useOrders';

const Order: React.FC = () => {

  const { data: ordersData, isLoading: ordersLoading, isError: ordersError } = useOrders.all({ limit: 10, offset: 0 });
  console.log(ordersData);

  return (
    <OrderPage orders={ordersData} />
  );
};

export default Order;