import useSWR from 'swr';
import OrderService from '@/lib/mya/orderService';

class useOrders {
    static all( { limit, offset }: { limit: number, offset: number }) {
        const { data, error } = useSWR<any, Error>(['orders', limit, offset], () => OrderService.fetchOrder({limit, offset}));
        return {
            data: data || [],
            isLoading: !error && !data,
            isError: error,
        };
    }

    static byId(orderId: number) {
        const { data, error } = useSWR<any, Error>(`order/${orderId}`, () => OrderService.fetchOrderById(orderId));
        console.log('Error', error);
        return {
            data: data || [],
            isLoading: !error && !data,
            isError: error,
        };
    }
}

export default useOrders;
