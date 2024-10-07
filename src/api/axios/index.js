import axios from 'axios';

export const config = {
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    'https://vpic.nhtsa.dot.gov/api/vehicles',
};

export const axiosInstance = axios.create(config);
