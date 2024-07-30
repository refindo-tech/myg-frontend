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
    console.log('Session expired. Refreshing token...');
    console.log('Error status:', error.response.status);

    //if error status is 401 or 403, it means the token is expired
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await refreshToken();
        
        if (response.status === 200) {
          const { accessToken } = response.data.results;
          sessionStorage.setItem('accessToken', accessToken);
          api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          return api(originalRequest);
        }
      } catch (err) {
        console.error('Refresh token expired or invalid. Logging out...', err);
        sessionStorage.removeItem('accessToken');
        // Redirect to login page or show login modal
      }
    }
    return Promise.reject(error);
  }
);

async function refreshToken() {
  return axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/myg/auth/refresh-token`, {
    withCredentials: true
  });
}

export default api;
