//api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});

export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export default api;