'use client';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import type { FC, ReactElement } from 'react';

import {
  Button,
  Calendar,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui';
import { cn } from '@/lib';
import { AppRoutes } from '@/models';
import { AuthFooter, EmailInput, PasswordInput } from '../../../components';
import { useSignUp } from '../hooks';

export const SignUpForm: FC = (): ReactElement => {
  const { form, status, handleSignUp } = useSignUp();

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-5"
        onSubmit={form.handleSubmit(handleSignUp)}
      >
        <h2 className="text-4xl text-center">
          {' '}
          ¡Nos alegra mucho que te sumes a ConTAnoS!{' '}
        </h2>
        <p>
          ¿Ya tienes una cuenta?{' '}
          <a
            className="underline hover:text-[#5D8966] transition-colors"
            href={AppRoutes.SIGN_IN}
          >
            Inicia sesión
          </a>
        </p>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#5D8966]"> Nombre : </FormLabel>
              <FormControl>
                <Input
                  className="h-[2.813rem]"
                  placeholder="Ingresa tu Nombre"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => <EmailInput field={field} />}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => <PasswordInput field={field} />}
        />
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-[#5D8966]">
                {' '}
                Fecha de Nacimiento :{' '}
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full pl-3 text-left font-normal h-[2.813rem]',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span> Selecciona una Fecha </span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-[#5D8966]"> Género : </FormLabel>
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
        <fieldset className="flex items-baseline gap-x-2 accent-[#5D8966]">
          <input type="checkbox" id="emails" />
          <label htmlFor="emails">
            Quiero recibir correos sobre ConTAnoS, fechas especiales en la
            comunidad e información de relevancia sobre temas que me interesan.
          </label>
        </fieldset>
        <p>
          Al crear una cuenta, accedes a los{' '}
          <a className="underline">Terminos de uso</a> y a la{' '}
          <a className="underline">Política de privacidad.</a>
        </p>
        <AuthFooter
          loading={status.isLoading}
          isValid={form.formState.isValid}
          authType="register"
        />
      </form>
    </Form>
  );
};
