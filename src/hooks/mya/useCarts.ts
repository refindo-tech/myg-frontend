import useSWR from 'swr';
import CartService from '@/lib/mya/cartService';

class useCarts {
    static all() {
        const { data, error } = useSWR<any, Error>('carts', () => CartService.fetchCart());
        return {
            data: data || [],
            isLoading: !error && !data,
            isError: error,
        };
    }
}

export default useCarts;