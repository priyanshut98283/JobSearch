import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.253.96:8080/api',
  baseURL: 'https://react-native-server-i8a2.onrender.com/api',
});

export default api;
