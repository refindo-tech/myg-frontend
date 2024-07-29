import axios from 'axios';
import { getCookie } from './cookieUtils';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  withCredentials: true, // Mengizinkan pengiriman cookie dengan permintaan
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = getCookie('refreshToken');

    if (error.response.status === 401 && !originalRequest._retry && refreshToken) {
      originalRequest._retry = true;
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/myg/auth/refresh-token`, {
          withCredentials: true
        });

        const { accessToken } = response.data.results;
        sessionStorage.setItem('accessToken', accessToken);
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        return api(originalRequest);
      } catch (err) {
        console.error('Refresh token expired or invalid. Logging out...', err);
        sessionStorage.removeItem('accessToken');
        // Redirect to login page or show login modal
      }
    }
    return Promise.reject(error);
  }
);

export default api;
