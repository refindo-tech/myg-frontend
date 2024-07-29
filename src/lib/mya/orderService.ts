// import axios from 'axios';
import axios from '@/axios/axiosConfig';
const API_URL = process.env.NEXT_PUBLIC_BASE_API + '/myg/api/mya/order/';

class OrderService {
    static async fetchOrder() {
        try {
            const response = await axios.get(API_URL);
            return response.data.meta.message;
        }
        catch (error) {
            console.error("Error fetching order", error);
            return null;
        }
    }

    //kalo beli satu produk
    static async orderProduct(productId: number, { quantity }: { quantity: number }) {
        try {
            const response = await axios.post(API_URL + productId + '/', {
                params: { quantity },
            });
            return response.data.meta.message;
        }
        catch (error) {
            console.error("Error ordering product", error);
            return null;
        }
    }

    //kalo beli banyak produk dari keranjang
    static async orderProducts() {
        try {
            const response = await axios.post(API_URL);
            return response.data.meta.message;
        }
        catch (error) {
            console.error("Error ordering product", error);
            return null;
        }
    }
}

export default OrderService;
