import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui';
import React, { FC, ReactElement } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

interface OptionsRadioGroupProps {
  label: string;
  field: ControllerRenderProps<any, any>;
}

export const OptionsRadioGroup: FC<OptionsRadioGroupProps> = ({
  label,
  field,
}): ReactElement => {
  return (
    <FormItem className="space-y-3">
      <FormLabel className="text-xl/8 font-medium">{label}</FormLabel>
      <FormControl>
        <RadioGroup
          onValueChange={field.onChange}
          defaultValue={field.value}
          className="flex flex-row space-x-10 pl-20"
        >
          <FormItem className="flex items-center space-x-3 space-y-0">
            <FormLabel className="font-medium text-xl text-black">Si</FormLabel>
            <FormControl>
              <RadioGroupItem value="si" />
            </FormControl>
          </FormItem>
          <FormItem className="flex items-center space-x-3 space-y-0">
            <FormLabel className="font-medium text-xl text-black">No</FormLabel>
            <FormControl>
              <RadioGroupItem value="no" />
            </FormControl>
          </FormItem>
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
