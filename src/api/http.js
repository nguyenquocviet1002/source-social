import axios from 'axios';

const http = axios.create({
  baseURL: 'https://scigroup.com.vn/app/tiktok/api',
});

export default http;
