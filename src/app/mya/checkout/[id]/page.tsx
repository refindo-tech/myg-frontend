'use client';

import React from 'react';
import CheckoutPage from '@components/mya/templates/CheckoutPage';
import LoadingPage from '@/components/mya/templates/LoadingPage';
import useOrders from '@/hooks/mya/useOrders';


const products = [
  {
    id: 1,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/5670a68628499b82a02d7083f86fb67fab6ac492be48519c3db66547cc349d49?apiKey=04edd4fc20274006b83b68624fe67059&",
    name: "Luxury Body Brightening Lotion (Almond)",
    price: "Rp. 120.000",
    quantity: 33,
    totalPrice: "Rp.3.000.000,00"
  },
  {
    id: 2,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c7d137fed96df7f8b8f295f6d47c76b8d5a6546755849fc50681d97182e672b?apiKey=04edd4fc20274006b83b68624fe67059&",
    name: "Milky Infused",
    price: "Rp. 135.000",
    quantity: 33,
    totalPrice: "Rp.3.000.000,00"
  },
  {
    id: 3,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1535877b86a1fa0f90b214713bad4687712fdb550b3a2a88e9c6cd17b5cdc9f6?apiKey=04edd4fc20274006b83b68624fe67059&",
    name: "Ultimate Rejuve Serum",
    price: "Rp. 120.000",
    quantity: 33,
    totalPrice: "Rp.3.000.000,00"
  }
];

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