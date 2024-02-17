'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { createUserAdapter } from '@/app/(landing)/(auth)/adapters';
import { signIn } from '@/app/(landing)/(auth)/services';
import { useFetchAndLoad, useUserStore } from '@/hooks';
import { SignInSchema, signUpDefaultValues } from '../models';
import { signInSchema } from '../schemas';

export const useSignIn = () => {
  const { setUser } = useUserStore();
  const { callEndpoint } = useFetchAndLoad();

  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: signUpDefaultValues,
  });

  const handleSignIn = async (values: SignInSchema) => {
    const response = await callEndpoint(signIn(values));

    if (response?.data) {
      const user = createUserAdapter(response.data);
      setUser(user);
    }
  };

  return {
    form,
    status: { isLoading: form.formState.isLoading },
    handleSignIn,
  };
};
