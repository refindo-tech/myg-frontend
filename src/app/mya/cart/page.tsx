'use client';

import React from 'react';
import CartPage from '@components/mya/templates/CartPage';


const products = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/5670a68628499b82a02d7083f86fb67fab6ac492be48519c3db66547cc349d49?apiKey=04edd4fc20274006b83b68624fe67059&",
    name: "Luxury Body Brightening Lotion (Almond)",
    price: "Rp. 120.000",
    quantity: 33,
    totalPrice: "Rp.3.000.000,00"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c7d137fed96df7f8b8f295f6d47c76b8d5a6546755849fc50681d97182e672b?apiKey=04edd4fc20274006b83b68624fe67059&",
    name: "Milky Infused",
    price: "Rp. 135.000",
    quantity: 33,
    totalPrice: "Rp.3.000.000,00"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1535877b86a1fa0f90b214713bad4687712fdb550b3a2a88e9c6cd17b5cdc9f6?apiKey=04edd4fc20274006b83b68624fe67059&",
    name: "Ultimate Rejuve Serum",
    price: "Rp. 120.000",
    quantity: 33,
    totalPrice: "Rp.3.000.000,00"
  }
];

const Cart: React.FC = () => {
  return (
    <CartPage
      logo="https://cdn.builder.io/api/v1/image/assets/TEMP/3286fac76e3ba9a985929c27e761a770990e30ecdadb8c2ecd7a514c9a3db612?apiKey=04edd4fc20274006b83b68624fe67059&"
      productCart={products}
    />
  );
};

export default Cart;