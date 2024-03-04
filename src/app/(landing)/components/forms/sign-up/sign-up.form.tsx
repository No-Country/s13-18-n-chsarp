'use client';

import type { FC, ReactElement } from 'react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';
import {
  AuthFooter,
  AuthHeader,
  EmailInput,
  PasswordInput,
  SignUpLegend,
  GenderInput,
  DateOfBirthInput,
} from '../form_items';
import { AuthType } from '@/app/(landing)/models';
import { useSignUp } from '@/app/(landing)/hooks';

export const SignUpForm: FC = (): ReactElement => {
  const { form, status, handleSignUp } = useSignUp();

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-5"
        onSubmit={form.handleSubmit(handleSignUp)}
      >
        <AuthHeader authType={AuthType.register} />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#5D8966]"> Nombre : </FormLabel>
              <FormControl>
                <Input
                  className="h-[2.813rem] border border-[#AAA]"
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
          render={({ field }) => <DateOfBirthInput field={field} />}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => <GenderInput field={field} />}
        />
        <SignUpLegend />
        <AuthFooter
          loading={status.isLoading}
          isValid={form.formState.isValid}
          authType={AuthType.register}
        />
      </form>
    </Form>
  );
};
