'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { signUpDefaultValues, type SignUpSchema } from '../models';
import { signUpSchema } from '../schemas';

export const useSignUp = () => {
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: signUpDefaultValues,
  });

  return { form, status: { isLoading: form.formState.isLoading } };
};
