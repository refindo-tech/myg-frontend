// layananService.ts
import api from '@/axios/axiosConfig';

// Interface untuk struktur data Layanan
interface Service {
  serviceId?: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string | null;
}

// Fungsi untuk mengambil semua layanan
export const getAllLayanan = async () => {
  try {
    const response = await api.get('/myg/api/layanan/');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch services:', error);
    throw error;
  }
};

// Fungsi untuk membuat layanan baru
export const createLayanan = async (layananData: Service) => {
  try {
    const formData = new FormData();
    formData.append('title', layananData.title);
    formData.append('description', layananData.description);
    formData.append('price', layananData.price.toString());
    if (layananData.imageUrl) {
      formData.append('imageUrl', layananData.imageUrl); // imageUrl berupa path atau file upload
    }

    const response = await api.post('/myg/api/layanan/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Failed to create service:', error);
    throw error;
  }
};

// Fungsi untuk memperbarui layanan berdasarkan ID
export const updateLayananById = async (serviceId: number, layananData: Service) => {
  try {
    const response = await api.put(`/myg/api/layanan/${serviceId}`, layananData);
    return response.data;
  } catch (error) {
    console.error('Failed to update service:', error);
    throw error;
  }
};

// Fungsi untuk mengambil layanan berdasarkan ID
export const getLayananById = async (serviceId: number) => {
  try {
    const response = await api.get(`/myg/api/layanan/${serviceId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch service by ID:', error);
    throw error;
  }
};

// Fungsi untuk menghapus layanan berdasarkan ID
export const deleteLayananById = async (serviceId: number) => {
  try {
    const response = await api.delete(`/myg/api/layanan/${serviceId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete service:', error);
    throw error;
  }
};
