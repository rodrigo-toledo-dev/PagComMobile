import axios from 'axios';

import constantsAPI from '../constantsApi';
const api = axios.create({
  baseURL: constantsAPI.BASE_URL
});

export default api;
