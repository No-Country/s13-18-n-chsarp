import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import React, { FC, ReactElement } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

interface GenderInputProps {
  field: ControllerRenderProps<any, 'gender'>;
}

export const GenderInput: FC<GenderInputProps> = ({ field }): ReactElement => {
  return (
    <FormItem>
      <FormLabel className="font-semibold text-2xl">Género:</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl className="border-x-0 border-t-0 border-b-[3px] shadow-none border-[#9EC79B] rounded-none w-full md:w-72">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem
            className="text-xl font-normal"
            value="I prefer not to say"
          >
            Prefiero no decirlo
          </SelectItem>
          <SelectItem className="text-xl font-normal" value="male">
            Masculino
          </SelectItem>
          <SelectItem className="text-xl font-normal" value="female">
            Femenino
          </SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
};
