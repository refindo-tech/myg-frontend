import api from '@/axios/axiosConfig';

// Interface for Service data structure
interface Service {
  serviceId?: number;
  title: string;
  description: string;
  price: number;
  imageFile?: File | string | null;
  imageUrl?: string;
  viewCount?: number;
}

// Configuration for requests
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

// Get all services
export const getAllLayanan = async () => {
  try {
    const response = await api.get(`/myg/api/layanan/`, config);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch services:', error);
    return { meta: { success: false }, message: 'Gagal memuat layanan' };
  }
};

// Alias for getAllLayanan to maintain compatibility with both naming conventions
export const fetchServices = getAllLayanan;

// Get service by ID
export const getLayananById = async (serviceId: number | string) => {
  try {
    const response = await api.get(`/myg/api/layanan/${serviceId}`, config);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch service by ID:', error);
    return { meta: { success: false }, message: 'Gagal memuat layanan berdasarkan ID' };
  }
};

// Alias for getLayananById
export const fetchServiceById = getLayananById;

// Create new service
export const createLayanan = async (layananData: Service) => {
  try {
    const formData = new FormData();
    formData.append('title', layananData.title);
    formData.append('description', layananData.description);
    formData.append('price', layananData.price.toString());
    
    if (layananData.imageFile && layananData.imageFile instanceof File) {
      formData.append('imageUrl', layananData.imageFile);
    }
    
    const response = await api.post(`/myg/api/layanan/`, formData, {
      ...config,
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    console.error('Failed to create service:', error);
    return { meta: { success: false }, message: 'Gagal membuat layanan' };
  }
};

// Update service by ID
export const updateLayananById = async (serviceId: number | string, layananData: Service) => {
  try {
    // If data contains a file, use FormData
    if (layananData.imageFile && layananData.imageFile instanceof File) {
      const formData = new FormData();
      formData.append('title', layananData.title);
      formData.append('description', layananData.description);
      formData.append('price', layananData.price.toString());
      formData.append('imageUrl', layananData.imageFile);
      
      if (layananData.viewCount !== undefined) {
        formData.append('viewCount', layananData.viewCount.toString());
      }
      
      const response = await api.put(`/myg/api/layanan/${serviceId}`, formData, {
        ...config,
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data;
    } 
    // Otherwise use JSON
    else {
      const response = await api.put(`/myg/api/layanan/${serviceId}`, layananData, config);
      return response.data;
    }
  } catch (error) {
    console.error('Failed to update service:', error);
    return { meta: { success: false }, message: 'Gagal memperbarui layanan' };
  }
};

// Alias for updateLayananById
export const updateServiceById = updateLayananById;

// Specific function to update only the view count
export const updateServiceViews = async (serviceId: number, viewCount: number) => {
  try {
    const response = await api.put(`/myg/api/layanan/${serviceId}`, { viewCount }, config);
    return response.data;
  } catch (error) {
    console.error('Error updating service views:', error);
    return { meta: { success: false }, message: 'Gagal memperbarui jumlah tampilan' };
  }
};

// Delete service by ID
export const deleteLayananById = async (serviceId: number | string) => {
  try {
    const response = await api.delete(`/myg/api/layanan/${serviceId}`, config);
    return response.data;
  } catch (error) {
    console.error('Failed to delete service:', error);
    return { meta: { success: false }, message: 'Gagal menghapus layanan' };
  }
};