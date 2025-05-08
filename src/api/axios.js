import axios from 'axios';

// Create an axios instance with the base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',  // Base URL of your backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
