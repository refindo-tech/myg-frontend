// import axios from 'axios';
import axios from '@/axios/axiosConfig';
const API_URL = process.env.NEXT_PUBLIC_BASE_API + '/myg/api/mya/keranjang/';

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
}

export default CartService;
