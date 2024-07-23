import axios from 'axios';

//path: src/lib/mya/productService.ts
// Gunanya untuk mengambil data produk dari API


const API_URL = 'http://localhost:5000/myg/api/mya/produk/';

class ProductService {
  static async fetchProducts({ limit = 10 }) {
    try {
      const response = await axios.get(API_URL, { params: { limit } });
      return response.data.meta.message;
    } catch (error) {
      console.error("Error fetching products", error);
      return null;
    }
  }

  static async fetchProductById(id: number) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data.meta.message;
    } catch (error) {
      console.error("Error fetching product by id", error);
      return null;
    }
  }
}

export default ProductService;
