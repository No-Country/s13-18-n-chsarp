import { Axios } from '@/lib';
import { AxiosCall } from '@/models';
import { loadAbort } from '@/utils';
import { AUTH_BASE_PATH, AUTH_ROUTES } from '../models';

export const confirmUser = (token: string): AxiosCall<any> => {
  const url = AUTH_BASE_PATH + AUTH_ROUTES.SIGN_UP_USER;
  const Controller = loadAbort();

  return {
    call: Axios.post(url, null, {
      headers: { Authorization: 'Bearer ' + token },
    }),

    controller: Controller,
  };
};
