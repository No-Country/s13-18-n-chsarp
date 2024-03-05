import axios from 'axios';

import { BASE_API_URL, API_PREFIX } from '@/models';

export const uploadImage = async (file: File) => {
  const url = BASE_API_URL + API_PREFIX + '/ProfileImage';

  const formData = new FormData();
  formData.set('file', file);

  try {
    const response = await axios.postForm(url, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
