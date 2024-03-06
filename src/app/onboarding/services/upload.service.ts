import axios from 'axios';

import { API_PREFIX, BASE_API_URL } from '@/models';

export const uploadImage = async (file: File) => {
  const url = BASE_API_URL + API_PREFIX + '/ProfileImage';

  const formData = new FormData();
  formData.set('file', file);

  // TODO: temporary fix for deploy
  // try {
  const response = await axios.postForm(url, formData);
  return response.data;
  // } catch (error) {
  //   throw error;
  // }
};
