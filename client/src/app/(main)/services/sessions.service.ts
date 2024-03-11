import { Axios } from '@/lib';
import { AxiosCall } from '@/models';
import { loadAbort } from '@/utils';
import { SESSIONS_BASE_PATH } from '../models/sessions-api.mode';

export const createChat = (data: any, token: string): AxiosCall<any> => {
  const url = SESSIONS_BASE_PATH;
  const Controller = loadAbort();

  return {
    call: Axios.post(url, data, {
      headers: { Authorization: 'Bearer ' + token },
    }),

    controller: Controller,
  };
};
