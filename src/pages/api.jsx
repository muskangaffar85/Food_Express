import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  withCredentials: true,
});

// Add request interceptor to include JWT token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default {
  // Auth
  login: (email, password) => API.post('/auth/login', { email, password }),
  signup: (data) => API.post('/auth/signup', data),
  
  // Foods
  getFoods: () => API.get('/foods'),
  getFood: (id) => API.get(`/foods/${id}`),
  getFoodsByCategory: (categoryId) => API.get(`/foods/category/${categoryId}`),
  
  // Categories
  getCategories: () => API.get('/categories'),
  
  // Orders
  createOrder: (data) => API.post('/orders', data),
  getOrders: () => API.get('/orders'),
  getOrder: (id) => API.get(`/orders/${id}`),
  
  // Users
  getMe: () => API.get('/users/me'),
  updateMe: (data) => API.patch('/users/updateMe', data),
};