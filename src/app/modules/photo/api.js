import { API_URL } from 'app/constants';
import axios from 'axios';

export const getPhotosApi = () => axios.get(`${API_URL}photos?albumId=1`);
