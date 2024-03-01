import React, { FC, ReactElement } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import {
  Button,
  Calendar,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';
import { format } from 'date-fns';

interface DateInputProps {
  field: ControllerRenderProps<any, 'dateOfBirth'>;
}

export const DateInput: FC<DateInputProps> = ({ field }): ReactElement => {
  return (
    <FormItem className="flex flex-col">
      <FormLabel className="font-semibold text-2xl">
        Fecha de nacimiento:
      </FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl className="text-xl bg-transparent border-x-0 border-t-0 border-b-[3px] shadow-none border-[#9EC79B] rounded-none w-full md:w-72">
            <Button
              variant={'outline'}
              className="w-full pl-3 text-left font-normal"
            >
              {field.value ? format(field.value, 'PPP') : <span></span>}
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
  );
};
