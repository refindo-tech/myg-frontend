// import axios from 'axios';
import axios from '@/axios/axiosConfig';
const API_URL = process.env.NEXT_PUBLIC_BASE_API + '/myg/api/mya/keranjang/';

// Helper function to filter out unnecessary properties
const filterCartItems = (cartItems: { productId: number, quantity: number }[]) => {
    return cartItems.map(item => ({
      productId: item.productId,
      quantity: item.quantity,
    }));
  };
  

class CartService {
    static async fetchCart() {
        try {
        const response = await axios.get(API_URL);
        return response.data.meta.message;
        } catch (error) {
        console.error("Error fetching carts", error);
        return null;
        }
    }

    //bulk update cart
    //accept array of object cartItems, but only need cartItemId, productId, and quantity
    static async updateCart(cartItems: { cartItemId:number, productId: number, quantity: number }[]) {

        const filteredCartItems = filterCartItems(cartItems);
        try {
            const response = await axios.put(API_URL + 'item/bulk/', filteredCartItems);
            return response.data.meta.message;
        }
        catch (error) {
            console.error("Error updating cart", error);
            return null;
        }
    }
}

export default CartService;
