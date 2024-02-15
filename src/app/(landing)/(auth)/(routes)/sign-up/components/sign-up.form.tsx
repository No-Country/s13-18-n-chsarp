'use client';

import { Loader2 } from 'lucide-react';
import type { FC, ReactElement } from 'react';

import {
  Button,
  Input,
  RadioGroup,
  RadioGroupItem,
  Form,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  FormItem,
} from '@/components/ui';
import { useSignUp } from '../hooks';

export const SignUpForm: FC = (): ReactElement => {
  const { form, status } = useSignUp();

  return (
    <Form {...form}>
      <form className="flex flex-col gap-y-5">
        <h2 className="text-4xl text-center"> Registrate </h2>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Nombre : </FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tu Nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel> Género : </FormLabel>
              <FormControl>
                <RadioGroup
                  className="flex flex-col space-y-1"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="I prefer not to say" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Prefiero no decirlo
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="male" />
                    </FormControl>
                    <FormLabel className="font-normal">Masculino</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="female" />
                    </FormControl>
                    <FormLabel className="font-normal"> Femenino </FormLabel>
                  </FormItem>
                </RadioGroup>
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
          Registrate
          {status.isLoading && (
            <Loader2 className="animate-spin h-5 w-5 ml-1.5" />
          )}
        </Button>
      </form>
    </Form>
  );
};
