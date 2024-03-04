'use client';

import type { FC, ReactElement } from 'react';

import { Form, FormField } from '@/components/ui';
import {
  AuthFooter,
  AuthHeader,
  EmailInput,
  PasswordInput,
} from '../form_items';
import { AuthType } from '@/app/(landing)/models';
import { useSignIn } from '@/app/(landing)/hooks';

export const SignInForm: FC = (): ReactElement => {
  const { form, status, handleSignIn } = useSignIn();

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-5"
        onSubmit={form.handleSubmit(handleSignIn)}
      >
        <AuthHeader authType={AuthType.login} />
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
          authType={AuthType.login}
        />
      </form>
    </Form>
  );
};
