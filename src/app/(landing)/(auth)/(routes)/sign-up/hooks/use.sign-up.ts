'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useAuth } from '@/app/(landing)/(auth)/hooks';
import { signUp } from '../../../services';
import { signUpDefaultValues, type SignUpSchema } from '../models';
import { signUpSchema } from '../schemas';

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
