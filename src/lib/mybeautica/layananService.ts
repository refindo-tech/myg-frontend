import axios from '../../axios/axiosConfig';

const API_URL = 'http://localhost:5000/myg/api/layanan';
const config = {
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

export const fetchServices = async () => {
    try {
        const response = await axios.get(API_URL, config);
        return response.data;
    } catch (error) {
        console.error('Error fetching services:', error);
        return { meta: { success: false }, message: 'Gagal memuat layanan' };
    }
};

export const fetchServiceById = async (id: string | string[]) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`, config);
        return response.data;
    } catch (error) {
        console.error('Error fetching service by id:', error);
        return { meta: { success: false }, message: 'Gagal memuat layanan berdasarkan ID' };
    }
};

export const updateServiceById = async (id: string | string[], data: any) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, data, config);
        return response.data;
    } catch (error) {
        console.error('Error updating service by id:', error);
        return { meta: { success: false }, message: 'Gagal memperbarui layanan' };
    }
}

export const updateServiceViews = async (id: number, viewCount: number) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, { viewCount }, config);
        return response.data;
    } catch (error) {
        console.error('Error updating service views:', error);
        throw error;
    }
};
