import { SnackbarManager } from '@/utils';
import { AxiosResponse } from 'axios';

export const responseInterceptor: any = (response: AxiosResponse<any, any>) => {
  // console.log(response.data.isSuccesfully);

  // if ((response.data.role = 'Moderator')) {
  //   SnackbarManager.success('Ya eres mentor!');
  // }
  return response;
};
