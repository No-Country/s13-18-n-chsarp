import { Axios } from '@/lib';
import { UserLogged } from '@/models';
import { loadAbort } from '@/utils';
import { AUTH_BASE_PATH, AUTH_ROUTES } from '../models';

export const signIn = (data: any) => {
  const url = AUTH_BASE_PATH + AUTH_ROUTES.SIGN_IN;
  const Controller = loadAbort();

  return {
    call: Axios.post<UserLogged>(url, data),
    controller: Controller,
  };
};

export const signUp = (data: any) => {
  const url = AUTH_BASE_PATH + AUTH_ROUTES.SIGN_UP;
  const Controller = loadAbort();

  return {
    call: Axios.post<UserLogged>(url, data),
    controller: Controller,
  };
};
