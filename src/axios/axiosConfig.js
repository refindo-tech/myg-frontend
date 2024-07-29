// src/axios/axiosConfig.js
import axios from 'axios';
import { getCookie, setCookie, removeCookie } from './cookieUtils'; // Utility functions for handling cookies

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = getCookie('accessToken');
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
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/refresh-token`, {
          headers: { 'Authorization': `Bearer ${refreshToken}` }
        });

        const { accessToken } = response.data.results;
        setCookie('accessToken', accessToken); // Save new access token to cookies
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        return api(originalRequest);
      } catch (err) {
        console.error('Refresh token expired or invalid. Logging out...', err);
        removeCookie('accessToken');
        removeCookie('refreshToken');
        // Redirect to login page or show login modal
      }
    }
    return Promise.reject(error);
  }
);

export default api;
