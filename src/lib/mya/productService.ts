import axios from 'axios';

//path: src/lib/mya/productService.ts
// Gunanya untuk mengambil data produk dari API


const API_URL = 'http://localhost:5000/myg/api/mya/produk/';
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

class ProductService {
  static async fetchProducts({ limit = 10 }) {
    try {
      const response = await axios.get(API_URL, {
        params: { limit },
        ...config,
      });
      return response.data.meta.message;
    } catch (error) {
      console.error("Error fetching products", error);
      return null;
    }
  }

  static async fetchProductById(id: number) {
    try {
      const response = await axios.get(`${API_URL}${id}/`, config);
      return response.data.meta.message;
    } catch (error) {
      console.error("Error fetching product by id", error);
      return null;
    }
  }
}

export default ProductService;
