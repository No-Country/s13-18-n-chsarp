'use client';

import { useFetchAndLoad, useUserActions, useUserContext } from '@/hooks';
import { useCallback, useEffect, useState } from 'react';

export const useConfirmUser = () => {
  const [success, setSuccess] = useState(false);

  const { saveUser } = useUserActions();

  const { user } = useUserContext((state) => state);

  const { loading, callEndpoint } = useFetchAndLoad();

  useEffect(() => {}, []);

  const handleConfirmUser = useCallback(async (): Promise<void> => {
    if (user?.token) {
      // const response =
      // await callEndpoint();
      // preseleccionServices(user?.token)
      // if (response.data) saveUser(response.data);
    }
  }, [callEndpoint, saveUser]);

  return {
    status: { isLoading: loading },
    success,
    handleConfirmUser,
  };
};
