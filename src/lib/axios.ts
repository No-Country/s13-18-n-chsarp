import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from 'axios';

import { errorResponseInterceptor } from '@/interceptors';
import { API_PREFIX, BASE_API_URL } from '@/models';

/**
 * Instancia de axios.
 */
export const Axios: AxiosInstance = axios.create({
  baseURL: BASE_API_URL + API_PREFIX,
});

Axios.interceptors.request.use((req: InternalAxiosRequestConfig) => req);
Axios.interceptors.response.use((res) => res, errorResponseInterceptor);
