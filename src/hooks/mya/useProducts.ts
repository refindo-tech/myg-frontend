// SWR + Axios, axios berfungsi untuk mengambil data dari API, sedangkan SWR berfungsi untuk mengelola state dari data yang diambil dari API.

import useSWR from 'swr';
import Product from '../../types/mya/product';
import ProductService from '@/lib/mya/productService';

class useProducts {
  static all(params: { limit: number, category?: string }) {
    const { data, error } = useSWR<Product[], Error>(['products', params], () => ProductService.fetchProducts(params));
    return {
      data: data || [],
      isLoading: !error && !data,
      isError: error,
    };
  }
  static byId(id: number) {
    const { data, error } = useSWR<Product, Error>(`product/${id}`, () => ProductService.fetchProductById(id));
    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
    };
  }
}

export default useProducts;