import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';
import React, { FC, ReactElement } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

interface CommonInputProps {
  label: string;
  field: ControllerRenderProps<any, any>;
}

export const CommonInput: FC<CommonInputProps> = ({
  label,
  field,
}): ReactElement => {
  return (
    <FormItem>
      <FormLabel className="font-semibold text-2xl">{label}:</FormLabel>
      <FormControl className="border-x-0 text-xl border-t-0 border-b-[3px] shadow-none border-[#9EC79B] rounded-none w-full md:w-72">
        <Input {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
