'use client';

import { Loader2 } from 'lucide-react';
import type { FC, ReactElement } from 'react';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';
import { useSignIn } from '../hooks';

export const SignInForm: FC = (): ReactElement => {
  const { form, status } = useSignIn();

  return (
    <Form {...form}>
      <form className="flex flex-col gap-y-5">
        <h2 className="text-4xl text-center"> Iniciar Sesión </h2>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel> E-Mail : </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingresa tu E-mail"
                  type="email"
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Contraseña : </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingresa tu Contraseña"
                  type="password"
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="
            mt-5 bg-black text-white hover:border hover:border-black dark:bg-white dark:text-black
            hover:bg-white hover:text-black dark:hover:border-white dark:hover:bg-black
            dark:hover:text-white
          "
          type="submit"
        >
          Iniciar Sesión
          {status.isLoading && (
            <Loader2 className="animate-spin h-5 w-5 ml-1.5" />
          )}
        </Button>
      </form>
    </Form>
  );
};
