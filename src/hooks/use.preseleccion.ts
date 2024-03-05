'use client';

import { type PreseleccionSchema } from '@/app/preseleccion/models';
import { preseleccionSchema } from '@/app/preseleccion/schemas';
import { preseleccionServices, uploadImage } from '@/app/preseleccion/services';
import {
  useFetchAndLoad,
  useToast,
  useUserStore /*, useUserContext */,
} from '@/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export const usePreseleccion = () => {
  const form = useForm<PreseleccionSchema>({
    resolver: zodResolver(preseleccionSchema),
  });

  // const { user } = useUserContext(state => state);
  const { user } = useUserStore();

  const { toast } = useToast();
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
    async (values: PreseleccionSchema): Promise<void> => {
      let urlProfileImage: string;

      try {
        urlProfileImage = await uploadImage(values.file![0]);
      } catch (error) {
        console.error({ error });
        toast({
          title: 'Hubo un error al subir la imagen.',
          description: 'Ocurrio un error inesperado :(',
          variant: 'destructive',
        });
        throw error;
      }

      const preselection = {
        dni: 'STRING',
        country: values.country,
        dateOfBirth: values.dateOfBirth,
        gender: values.gender,
        urlProfileImage,
      };

      if (user?.token) {
        await callEndpoint(preseleccionServices(preselection, user?.token));
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
