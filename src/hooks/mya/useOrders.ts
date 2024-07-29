import useSWR from 'swr';
import OrderService from '@/lib/mya/orderService';

const useOrders = () => {
  const orderProducts = async () => {
    try {
      const data = await OrderService.orderProducts();
      return { data, isError: false };
    } catch (error) {
      return { data: null, isError: true };
    }
  };

  return { orderProducts };
};

export default useOrders;
