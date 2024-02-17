'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { createUserAdapter } from '@/app/(landing)/(auth)/adapters';
import { signUp } from '@/app/(landing)/(auth)/services';
import { useFetchAndLoad, useUserStore } from '@/hooks';
import { signUpDefaultValues, type SignUpSchema } from '../models';
import { signUpSchema } from '../schemas';

export const useSignUp = () => {
  const { setUser } = useUserStore();
  const { callEndpoint } = useFetchAndLoad();

  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: signUpDefaultValues,
  });

  const handleSignUp: SubmitHandler<SignUpSchema> = useCallback(
    async (values: SignUpSchema | any): Promise<void> => {
      const response = await callEndpoint(signUp(values));

      if (response?.data) {
        const user = createUserAdapter(response.data);
        setUser(user);
      }
    },
    [callEndpoint, setUser]
  );

  return {
    form,
    status: { isLoading: form.formState.isLoading },
    handleSignUp,
  };
};
