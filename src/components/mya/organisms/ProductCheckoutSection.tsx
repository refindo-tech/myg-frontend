import React from 'react';
import CheckoutProductCard from '@/components/mya/molecules/Checkout/CheckoutProductCard';
import PaymentMethod from '@/components/mya/molecules/Checkout/PaymentMethod';
import BuyerInfo from '@/components/mya/molecules/Checkout/BuyerInfo';
import { Checkbox, Button } from '@nextui-org/react';

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  quantity: number;
  totalPrice: string;
}

interface ProductCheckoutSectionProps {
  products: Product[];
}

const ProductCheckoutSection: React.FC<ProductCheckoutSectionProps> = ({ products }) => {
  return (
      <section className="flex flex-col max-md:w-full">
        <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
          <header className="flex flex-col justify-center p-6 text-2xl bg-white border-b border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            <BuyerInfo />
            </div>
          </header>
          {products.map((product, index) => (
            <CheckoutProductCard key={index} products={product}/>
          ))}
          <PaymentMethod />
        </div>
      </section>
  );
};

export default ProductCheckoutSection;
