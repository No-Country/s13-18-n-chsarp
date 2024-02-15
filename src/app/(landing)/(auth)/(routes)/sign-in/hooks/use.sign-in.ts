'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { SignInSchema, signUpDefaultValues } from '../models';
import { signInSchema } from '../schemas';

export const useSignIn = () => {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: signUpDefaultValues,
  });

  return { form, status: { isLoading: form.formState.isLoading } };
};
