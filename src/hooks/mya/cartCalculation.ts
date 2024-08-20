import { useState, useEffect } from 'react';
import CartItem from '@/types/mya/cartItem';

const distributorPrice = 10000000;
const agentPrice = 3000000;

export const useSubTotalPrice = (cartItems: CartItem[]) => {
    const [subTotalPrice, setSubTotalPrice] = useState<number>(0);

    useEffect(() => {
        const subTotal = cartItems.reduce((acc, item) => acc + item.product.price.RETAIL * item.quantity, 0);
        setSubTotalPrice(subTotal);
    }, [cartItems]);

    return subTotalPrice;
};

export const useTotalPrice = (cartItems: CartItem[], subTotalPrice: number) => {
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        let total = subTotalPrice;
        if (subTotalPrice > distributorPrice) {
            total = cartItems.reduce((acc, item) => acc + item.product.price.DISTRIBUTOR * item.quantity, 0);
        } else if (subTotalPrice > agentPrice) {
            total = cartItems.reduce((acc, item) => acc + item.product.price.AGENT * item.quantity, 0);
        }
        setTotalPrice(total);
    }, [subTotalPrice, cartItems]);

    return totalPrice;
};

export const useTotalQuantity = (cartItems: CartItem[]) => {
    const [totalQuantity, setTotalQuantity] = useState<number>(0);

    useEffect(() => {
        const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        setTotalQuantity(totalQty);
    }, [cartItems]);

    return totalQuantity;
};
