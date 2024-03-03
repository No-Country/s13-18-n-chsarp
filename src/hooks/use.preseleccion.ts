'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { type PreseleccionSchema } from '@/app/preseleccion/models';
import { preseleccionSchema } from '@/app/preseleccion/schemas';
import { useFetchAndLoad, useUserStore } from '@/hooks';
import { useCallback, useEffect } from 'react';
import { preseleccionServices } from '@/app/preseleccion/services';

export const usePreseleccion = () => {
  const form = useForm<PreseleccionSchema>({
    resolver: zodResolver(preseleccionSchema),
  });

  const { user } = useUserStore();
  const { loading, callEndpoint } = useFetchAndLoad();

  useEffect(() => {
    if (user?.user.name) {
      form.setValue('name', user.user.name);
    }
    if (user?.user.email) {
      form.setValue('email', user.user.email);
    }
    if (user?.user.gender) {
      form.setValue('gender', user.user.gender);
    }
    if (user?.user.dateOfBirth) {
      const newDate = new Date(user.user.dateOfBirth);
      form.setValue('dateOfBirth', newDate);
    }
  }, [user]);

  const handlePreseleccion: SubmitHandler<PreseleccionSchema> = useCallback(
    async (values: any): Promise<void> => {
      const formData = new FormData();
      // formData.set('urlProfileImage', values.file);
      formData.set('dni', values.dni);
      formData.set('country', values.country);

      if (user?.token) {
        const response = await callEndpoint(
          preseleccionServices(formData, user?.token)
        );
        console.log(response);
      }
    },
    [callEndpoint]
  );

  return {
    form,
    status: { isLoading: loading },
    handlePreseleccion,
  };
};
