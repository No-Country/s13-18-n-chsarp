import { Axios } from '@/lib';
import { AxiosCall } from '@/models';
import { loadAbort } from '@/utils';
import { AUTH_BASE_PATH, AUTH_ROUTES } from '../models';

export const preseleccionServices = (
  data: any,
  token: string
): AxiosCall<any> => {
  const url = AUTH_BASE_PATH + AUTH_ROUTES.SIGN_UP_MODERATOR;
  const Controller = loadAbort();

  return {
    call: Axios.post(url, data, {
      headers: { Authorization: 'Bearer ' + token },
    }),

    controller: Controller,
  };
};
