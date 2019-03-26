import { API_URL } from 'app/constants';
import axios from 'axios';

export const getUsersApi = () => axios.get(`${API_URL}users`);
