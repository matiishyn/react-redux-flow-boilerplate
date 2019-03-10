import { API_URL } from 'app/constants';
import axios from 'axios';

export const getProfileApi = () => axios.get(`${API_URL}users/1`);
