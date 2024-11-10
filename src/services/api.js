//api.js
import axios from 'axios';

const api = axios.create({
  baseURL:process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000',
});

export const fetchProducts = async () => {
  const response = await api.get('/');
  return response.data;
};

export default api;