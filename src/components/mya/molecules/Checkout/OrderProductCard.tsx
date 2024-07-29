import React, { useState } from 'react';
import { Button, Checkbox } from '@nextui-org/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import CartItem from '@/types/mya/cartItem';
import { rupiah, imageUrl } from '@/lib/mya/helpers';

interface OrderProductCardProps {
  cartItem: CartItem;
  isCheck?: boolean;
}

type Order = number;

const OrderProductCard: React.FC<OrderProductCardProps> = ({ cartItem, isCheck }) => {

  //cartItem.quantity
  const [order, setOrder] = useState<Order>(cartItem.quantity);

  //increast quantity
  const increaseOrder = () => {
    setOrder(order + 1);
    console.log(cartItem.quantity);
  }
  const decreaseOrder = () => {
    if (order > 1) {
      setOrder(order - 1);
    }
  }

  const totalPrice = cartItem.product.price.RETAIL * cartItem.quantity;

  return (
    <div className="flex gap-5 justify-center px-6 py-2 mt-5 shadow-sm bg-zinc-50 rounded-[32px] max-md:flex-wrap max-md:px-5">
      {/* <input type="checkbox" className="shrink-0 my-auto w-5 h-5 border border-rose-400 border-solid" /> */}
      <Checkbox color="danger" isSelected={isCheck} />
      <div className="flex flex-none justify-center items-center">
        <img loading="lazy" src={imageUrl(cartItem.product.productImages[0])} alt={cartItem.product.name} className="aspect-square w-32 object-cover rounded-md" />
      </div>
      <div className="flex flex-col flex-1 my-auto max-md:max-w-full gap-2">
        <h3 className="text-md md:text-xl font-playfair text-zinc-700 max-md:max-w-full">{cartItem.product.name}</h3>
        <p className="mt-3 text-lg font-medium leading-7 text-foreground max-md:max-w-full">{rupiah(cartItem.product.price.RETAIL)}</p>
        <div className="flex gap-2 w-fit items-center border border-gray rounded-xl p-2">
          <Button onClick={decreaseOrder} variant='bordered' radius='full' isIconOnly className="bg-white font-semibold flex items-center w-6 h-6 flex-none">
            <MinusIcon className="h-2 w-2" />
          </Button>
          <span className="text-default-500 text-md font-normal font-openSans justify-center items-center">
            {order}
          </span>
          <Button onClick={increaseOrder} variant='bordered' radius='full' isIconOnly className="bg-white font-semibold flex items-center w-6 h-6 flex-none">
            <PlusIcon className="h-2 w-2" />
          </Button>

        </div>
      </div>
      <div className="flex w-full md:w-fit flex-row md:flex-col pl-12 md:pl-0 md:pb-20">
        <h4 className="flex-1 md:flex-none md:mt-3 text-xl sm:leading-8 font-playfair text-foreground">Total harga</h4>
        <p className="md:mt-3 text-xl font-medium text-foreground">{rupiah(totalPrice)}</p>
      </div>
    </div>
  );
};

export default OrderProductCard;
