import React, { useState, useEffect } from 'react';
import { Button, Checkbox } from '@nextui-org/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import CartItem from '@/types/mya/cartItem';
import { rupiah, imageUrl } from '@/lib/mya/helpers';

import CartService from '@/lib/mya/cartService';

import Swal from 'sweetalert2';

interface OrderProductCardProps {
  cartItem: CartItem;
  isCheck?: boolean;
  updateCartItemQuantity?: (productId: number, newQuantity: number) => void;
  deleteCartItem?: (productId: number) => void;
}

const OrderProductCard: React.FC<OrderProductCardProps> = ({ cartItem, isCheck, updateCartItemQuantity, deleteCartItem }) => {

  //cartItem.quantity
  const [order, setOrder] = useState<number>(cartItem.quantity);

  useEffect(() => {
    if (updateCartItemQuantity) {
      updateCartItemQuantity(cartItem.productId, order);
    }
  }, [order]);

  //handle delete cart item, if deleteCartItem is provided
  const handleDelete = () => {
    if (deleteCartItem) {
      // deleteCartItem(cartItem.productId);
      Swal.fire({
        title: 'Hapus Produk',
        text: `Apakah anda yakin ingin menghapus ${cartItem.product.name} dari keranjang belanja?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, Hapus',
        cancelButtonText: 'Batal',
        confirmButtonColor: '#DC2626',
        cancelButtonColor: '#4B5563',
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            CartService.deleteCartItem(cartItem.productId);
            deleteCartItem(cartItem.productId);
            Swal.fire('Berhasil', 'Produk berhasil dihapus dari keranjang belanja', 'success');
          } catch (error) {
            Swal.fire('Gagal', 'Produk gagal dihapus dari keranjang belanja', 'error');
          }
        }
      }
        ,);
    }
  }


  //increase quantity
  const increaseOrder = () => {
    setOrder(order + 1);
  }
  const decreaseOrder = () => {
    if (order > 1) {
      setOrder(order - 1);
    }
  }

  const totalPrice = cartItem.product.price.RETAIL * order;

  return (
    <div className="flex gap-5 justify-center px-6 py-2 mt-5 shadow-sm bg-zinc-50 rounded-[32px] max-md:flex-wrap max-md:px-5">
      {/* <input type="checkbox" className="shrink-0 my-auto w-5 h-5 border border-rose-400 border-solid" /> */}
      {/* <Checkbox color="danger" isSelected={isCheck} /> */}
      <div className="flex flex-none justify-center items-center">
        <img loading="lazy" src={imageUrl(cartItem.product.productImages[0])} alt={cartItem.product.name} className="aspect-square w-32 object-cover rounded-md" />
      </div>
      <div className="flex flex-col flex-1 my-auto max-md:max-w-full gap-2">
        <h3 className="text-md md:text-xl font-playfair text-zinc-700 max-md:max-w-full">{cartItem.product.name}</h3>
        <p className="mt-3 text-lg font-medium leading-7 text-foreground max-md:max-w-full">{rupiah(cartItem.product.price.RETAIL)}</p>
        <div className="flex flex-row gap-5 mt-3">
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
          <Button variant='light' className="text-md font-semibold w-fit text-rose-400" onClick={handleDelete}>
            Hapus
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
