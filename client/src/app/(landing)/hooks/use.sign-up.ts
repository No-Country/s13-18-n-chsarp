'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useAuth } from '../hooks';
import { signUpDefaultValues, type SignUpSchema } from '../models';
import { signUpSchema } from '../schemas';
import { signUp } from '../services';

export const useSignUp = () => {
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: signUpDefaultValues,
  });
  const { loading, handleAuth } = useAuth({ authFn: signUp });

  return {
    form,
    status: { isLoading: loading },
    handleSignUp: handleAuth,
  };
};
