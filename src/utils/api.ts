import axios, { AxiosInstance, AxiosError } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081/api';

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request interceptor - Add token to requests
api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - Handle Laravel API responses
api.interceptors.response.use(
  (response) => {
    // Laravel API returns data in response.data
    // If it has a 'data' property, return that, otherwise return the full response
    return response.data || response;
  },
  (error: AxiosError) => {
    // Handle specific error responses from Laravel
    if (error.response) {
      const status = error.response.status;
      const data: any = error.response.data;

      // 401 Unauthorized - Clear token and redirect to login
      if (status === 401) {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          // You can redirect to login page here if needed
        }
      }

      // Return error message from Laravel or default message
      const message = data?.message || error.message || 'An error occurred';
      return Promise.reject({
        status,
        message,
        data: data?.data || null,
      });
    }

    return Promise.reject(error);
  }
);

export default api;
