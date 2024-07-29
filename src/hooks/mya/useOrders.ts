import useSWR from 'swr';
import OrderService from '@/lib/mya/orderService';

class useOrders {
    static all() {
        const { data, error } = useSWR<any, Error>('orders', () => OrderService.fetchOrder());
        return {
            data: data || [],
            isLoading: !error && !data,
            isError: error,
        };
    }

    static byId(orderId: number) {
        const { data, error } = useSWR<any, Error>('orders', () => OrderService.fetchOrderById(orderId));
        return {
            data: data || [],
            isLoading: !error && !data,
            isError: error,
        };
    }
}

export default useOrders;
