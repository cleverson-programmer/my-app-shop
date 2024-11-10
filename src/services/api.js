//api.js
import axios from 'axios';

const api = axios.create({
  baseURL:'http://localhost:5000',
});

export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export default api;