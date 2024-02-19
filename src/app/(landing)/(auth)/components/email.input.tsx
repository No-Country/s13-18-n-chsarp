import type { FC, ReactElement } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';

interface EmailInputProps {
  field: ControllerRenderProps<any, 'email'>;
}

export const EmailInput: FC<EmailInputProps> = ({
  field,
}: EmailInputProps): ReactElement => {
  return (
    <FormItem>
      <FormLabel className="text-[#5D8966]"> E-Mail : </FormLabel>
      <FormControl>
        <Input
          className="h-[2.813rem]"
          placeholder="Ingresa tu E-mail"
          type="email"
          {...field}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
