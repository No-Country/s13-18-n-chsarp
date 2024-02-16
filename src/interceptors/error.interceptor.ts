import { AxiosError } from 'axios';

/**
 * Interceptador de las respuestas de error a las peticiones de axios.
 *
 * @param { AxiosError<any> } error - Respuesta de error de axios.
 */
export const errorResponseInterceptor:
  | ((_error: AxiosError<any>) => never | void)
  | null
  | undefined = (error: AxiosError<any>): any => {
  console.error({ error });
};
