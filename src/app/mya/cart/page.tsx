'use client';

import React from 'react';
import CartPage from '@components/mya/templates/CartPage';
import LoadingPage from '@/components/mya/templates/LoadingPage';
import useCarts from '@/hooks/mya/useCarts';
import { useRouter } from 'next/navigation';
import useAuthCheck from '@/hooks/common/auth';

const Cart: React.FC = () => {
  const { data: products, isLoading: isLoadingCart, isError: isErrorCart } = useCarts.all();
  const router = useRouter();
  const isAuth = useAuthCheck();
  
  React.useEffect(() => {
    if (isAuth === false) {
      router.push('/login');
    }
  }, [isAuth, router]);

  if (isAuth === null || isLoadingCart) {
    return <LoadingPage />;
  }

  if (isErrorCart) {
    return <div>Error loading cart</div>;
  }

  return (
    <CartPage productCart={products} />
  );
};

export default Cart;
