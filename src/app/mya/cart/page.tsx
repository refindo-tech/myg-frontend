'use client';

import React from 'react';
import CartPage from '@components/mya/templates/CartPage';
import LoadingPage from '@/components/mya/templates/LoadingPage';
import useCarts from '@/hooks/mya/useCarts';

const Cart: React.FC = () => {
  const { data:products, isLoading:isLoadingCart, isError:isErrorCart } = useCarts.all();
  if (isLoadingCart) return <LoadingPage />;
  return (
    <CartPage
      productCart={products}
    />
  );
};

export default Cart;