'use client';

import { useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { AxiosCall, UserLogged } from '@/models';
import { useFetchAndLoad, useUserStore } from '@/hooks';
import { createUserAdapter } from '../adapters';
import { SignInSchema } from '../(routes)/sign-in/models';
import { SignUpSchema } from '../(routes)/sign-up/models';

interface UseAuthProps {
  authFn: (data: any) => AxiosCall<UserLogged>;
}

export const useAuth = ({ authFn }: UseAuthProps) => {
  const { setUser } = useUserStore();
  const { loading, callEndpoint } = useFetchAndLoad();

  const handleAuth: SubmitHandler<SignInSchema | SignUpSchema> = useCallback(
    async (values: any): Promise<void> => {
      const response = await callEndpoint(authFn(values));

      if (response.data) {
        const user = createUserAdapter(response.data);
        setUser(user);
      }
    },
    [callEndpoint, setUser, authFn]
  );

  return { loading, handleAuth };
};
