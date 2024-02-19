'use client';

import type { FC, ReactElement } from 'react';

import { Form, FormField } from '@/components/ui';
import { AuthFooter, EmailInput, PasswordInput } from '../../../components';
import { useSignIn } from '../hooks';

export const SignInForm: FC = (): ReactElement => {
  const { form, status, handleSignIn } = useSignIn();

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-5"
        onSubmit={form.handleSubmit(handleSignIn)}
      >
        <h2 className="text-4xl text-center"> Iniciar Sesión </h2>
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
        <AuthFooter
          loading={status.isLoading}
          isValid={form.formState.isValid}
          authType="login"
        />
      </form>
    </Form>
  );
};
