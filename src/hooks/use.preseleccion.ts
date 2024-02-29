'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  preseleccionDefaultValues,
  type PreseleccionSchema,
} from '@/app/preseleccion/models';
import { preseleccionSchema } from '@/app/preseleccion/schemas';

export const usePreseleccion = () => {
  const form = useForm<PreseleccionSchema>({
    resolver: zodResolver(preseleccionSchema),
    defaultValues: preseleccionDefaultValues,
  });
  // const { loading, handleAuth } = useAuth({ authFn: signUp });

  return {
    form,
    // status: { isLoading: loading },
    // handlePreseleccion: handleAuth,
  };
};
