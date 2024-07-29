import axios from 'axios';
const API_URL = 'http://localhost:5000/myg/api/mya/keranjang/';
//access token
const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
  },
  withCredentials: true,
};

class CartService {
    static async fetchCart() {
        try {
        const response = await axios.get(API_URL, {
            ...config,
        });
        return response.data.meta.message;
        } catch (error) {
        console.error("Error fetching carts", error);
        return null;
        }
    }
}

export default CartService;
