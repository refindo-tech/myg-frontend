import React, { useState } from 'react';
import OrderItem from '@/types/mya/orderitem';
import { rupiah, imageUrl } from '@/lib/mya/helpers';

interface OrderProductCardProps {
  orderItem: OrderItem;
  isCheck?: boolean;
}

type Order = number;

const CheckoutProductCard: React.FC<OrderProductCardProps> = ({ orderItem }) => {

  return (
    <div className="flex gap-5 justify-center px-6 mt-5 shadow-sm bg-zinc-50 rounded-[32px] max-md:flex-wrap max-md:px-5">
      {/* <input type="checkbox" className="shrink-0 my-auto w-5 h-5 border border-rose-400 border-solid" /> */}
      
      <div className="flex flex-none justify-center items-center">
        <img loading="lazy" src={imageUrl(orderItem.product.productImages[0])} alt={orderItem.product.name} className="aspect-square w-32 rounded-md object-cover" />
      </div>
      <div className="flex flex-col flex-1 my-auto h-full max-md:max-w-full gap-2 mt-4">
        <h3 className="text-md md:text-xl font-playfair text-zinc-700 max-md:max-w-full">{orderItem.product.name}</h3>
        <div className="flex w-fit items-center">
            <span className="text-foreground">
            Qty: {orderItem.quantity}
            </span>
        </div>
      </div>
      <div className="flex w-full md:w-fit flex-row md:flex-col md:pl-0 md:pb-20">
        <h4 className="flex-1 md:flex-none md:mt-3 text-xl sm:leading-8 font-playfair text-foreground">Total harga</h4>
        <p className="md:mt-3 text-xl font-medium text-foreground">{rupiah(orderItem.total)}</p>
      </div>
    </div>
  );
};

export default CheckoutProductCard;
