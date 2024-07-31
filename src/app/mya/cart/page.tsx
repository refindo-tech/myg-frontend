'use client';

import React from 'react';
import CartPage from '@components/mya/templates/CartPage';
import LoadingPage from '@/components/mya/templates/LoadingPage';
import useCarts from '@/hooks/mya/useCarts';
import { useRouter } from 'next/navigation';

import { isAuthenticated } from '@/helpers/auth';

const Cart: React.FC = () => {
  const router = useRouter();

  // if (!isAuthenticated()) {
  //   router.push('/login');
  //   return null;
  // }

  const { data:products, isLoading:isLoadingCart, isError:isErrorCart } = useCarts.all();
  if (isLoadingCart) return <LoadingPage />;
  return (
    <CartPage
      productCart={products}
    />
  );
};

export default Cart;