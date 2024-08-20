// import axios from 'axios';
import axios from '@/axios/axiosConfig';

//path: src/lib/mya/productService.ts
// Gunanya untuk mengambil data produk dari API


const API_URL = process.env.NEXT_PUBLIC_BASE_API + '/myg/api/mya/produk/';
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

class ProductService {
  static async fetchProducts({ limit = 10, category, isRecommended }: { limit: number, category?: string, isRecommended?: boolean }) {
    try {
      const response = await axios.get(API_URL, {
        params: { limit, category, isRecommended },
        ...config,
      });
      return response.data.meta.message;
    } catch (error) {
      // console.error("Error fetching products", error);
      return null;
    }
  }

  static async fetchProductById(id: number) {
    try {
      const response = await axios.get(`${API_URL}${id}/`, config);
      return response.data.meta.message;
    } catch (error) {
      // console.error("Error fetching product by id", error);
      throw error;
      return null;
    }
  }
}

export default ProductService;
