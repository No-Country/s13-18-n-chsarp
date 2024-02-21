'use client';

import { useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { useFetchAndLoad } from '@/hooks';
import { AxiosCall, type UserLogged } from '@/models';
import { useUserActions } from '../hooks';
import { SignInSchema } from '../sign-in/models';
import { SignUpSchema } from '../sign-up/models';

interface UseAuthProps {
  authFn: (data: any) => AxiosCall<UserLogged>;
}

export const useAuth = ({ authFn }: UseAuthProps) => {
  const { saveUser } = useUserActions();
  const { loading, callEndpoint } = useFetchAndLoad();

  const handleAuth: SubmitHandler<SignInSchema | SignUpSchema> = useCallback(
    async (values: any): Promise<void> => {
      const response = await callEndpoint(authFn(values));

      if (response.data) saveUser(response.data);
    },
    [callEndpoint, saveUser, authFn]
  );

  return { loading, handleAuth };
};
