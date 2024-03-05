'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { signIn } from '../services';
import { SignInSchema, signUpDefaultValues } from '../models';
import { signInSchema } from '../schemas';
import { useAuth } from '../hooks';

export const useSignIn = () => {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: signUpDefaultValues,
  });
  const { loading, handleAuth } = useAuth({ authFn: signIn });

  return {
    form,
    status: { isLoading: loading },
    handleSignIn: handleAuth,
  };
};
