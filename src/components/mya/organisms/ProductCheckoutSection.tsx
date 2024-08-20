import React from 'react';
import CheckoutProductCard from '@/components/mya/molecules/Checkout/CheckoutProductCard';
import PaymentMethod from '@/components/mya/molecules/Checkout/PaymentMethod';
import BuyerInfo from '@/components/mya/molecules/Checkout/BuyerInfo';
import UserProfile from '@/types/mya/userprofile';
import OrderItem from '@/types/mya/orderitem';

interface ProductCheckoutSectionProps {
  orderItems: OrderItem[];
  userProfile: UserProfile;
}

const ProductCheckoutSection: React.FC<ProductCheckoutSectionProps> = ({ orderItems: orderItems, userProfile }) => {
  return (
      <section className="flex flex-col w-full">
        <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
          <header className="flex flex-col justify-center p-6 text-2xl bg-white border-b border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between w-full max-md:flex-wrap">
            <BuyerInfo userProfile={userProfile} />
            </div>
          </header>
          {orderItems.map((product, index) => (
            <CheckoutProductCard key={index} orderItem={product}/>
          ))}
          {/* <PaymentMethod /> */}
        </div>
      </section>
  );
};

export default ProductCheckoutSection;
