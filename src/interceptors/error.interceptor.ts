'use client';

import { AxiosError } from 'axios';

import { SnackbarManager, getValidationError } from '@/utils';

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
  const { code, response } = error;

  if (response?.data.errors) {
    Object.entries(response?.data.errors).forEach(([key, value]) => {
      const errorArray = value as string[];
      errorArray.forEach((error) => {
        SnackbarManager.error(getValidationError(error));
      });
    });
  }
};
