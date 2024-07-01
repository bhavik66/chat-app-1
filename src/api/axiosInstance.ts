import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // Replace with your actual base URL
  // You can also add other default settings here
  // headers: { 'Authorization': 'Bearer YOUR_TOKEN' },
  // timeout: 1000,
});

export default axiosInstance;
