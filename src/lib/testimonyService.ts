import axios from 'axios';

//path: src/lib/mya/productService.ts
// Gunanya untuk mengambil data produk dari API


const API_URL = 'http://localhost:5000/myg/api/testimonials/';

class TestimonyService {
  static async fetchTestimonies({ limit = 10 }) {
    try {
      const response = await axios.get(API_URL, { params: { limit } });
      console.log(response.data.meta.message);
      return response.data.meta.message;
    } catch (error) {
      console.error("Error fetching testimonies", error);
      return null;
    }
  }

  static async fetchTestimonyById(id: number) {
    try {
      const response = await axios.get(`${API_URL}${id}/`);
      return response.data.meta.message;
    } catch (error) {
      console.error("Error fetching testimony by id", error);
      return null;
    }
  }
}

export default TestimonyService;
