'use client';

import { useFetchAndLoad, useUserActions, useUserContext } from '@/hooks';
import { useCallback, useEffect, useState } from 'react';
import { confirmUser } from '../services';

export const useConfirmUser = () => {
  const [success, setSuccess] = useState(false);

  const { saveUser } = useUserActions();

  const { user } = useUserContext((state) => state);

  const { loading, callEndpoint } = useFetchAndLoad();

  useEffect(() => {}, []);

  const handleConfirmUser = useCallback(async (): Promise<void> => {
    if (user?.token) {
      const response = await callEndpoint(confirmUser(user.token));

      if (response.data) {
        setSuccess(true);
        setTimeout(() => {
          saveUser(response.data);
        }, 5000);
      }
    }
  }, [callEndpoint, saveUser]);

  return {
    status: { isLoading: loading },
    success,
    handleConfirmUser,
  };
};
