// import axios from 'axios';
import axios from '@/axios/axiosConfig';
const API_URL = process.env.NEXT_PUBLIC_BASE_API + '/myg/api/mya/order/';
const config = {
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

class OrderService {
    static async fetchOrder( {limit, offset}: {limit: number, offset: number} ) {
        try {
            const response = await axios.get(API_URL, {
                params: {
                    limit: limit,
                    offset: offset
                }
            });
            return response.data.meta.message;
        }
        catch (error) {
            console.error("Error fetching order", error);
            return null;
        }
    }

    //fetch order by id
    static async fetchOrderById(orderId: number) {
        try {
            const response = await axios.get(API_URL + orderId + '/', config);
            return response.data.meta.message;
        }
        catch (error) {
            console.error("Error fetching order by id", error);
            throw error;
            return null;
        }
    }

    //kalo beli satu produk
    static async orderProduct(productId: number, { quantity }: { quantity: number }) {
        try {
            const payload = { 
                quantity : quantity
            };
            console.log(payload);
            const response = await axios.post(`${API_URL}${productId}/`, payload, config);
            return response.data.meta.message;
        } catch (error) {
            console.error("Error ordering product", error);
            return null;
        }
    }

    //kalo beli banyak produk dari keranjang
    static async orderProducts() {
        try {
            const response = await axios.post(API_URL, config);
            return response.data.meta.message;
        }
        catch (error) {
            console.error("Error ordering product", error);
            return null;
        }
    }
}

export default OrderService;
