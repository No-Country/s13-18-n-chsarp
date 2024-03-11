import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import type { FC, ReactElement } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';

import type { SignUpSchema } from '@/app/(landing)/models';
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
import { cn } from '@/lib';

interface DateOfBirthInputProps {
  field: ControllerRenderProps<SignUpSchema, 'dateOfBirth'>;
}

export const DateOfBirthInput: FC<DateOfBirthInputProps> = ({
  field,
}: DateOfBirthInputProps): ReactElement => {
  return (
    <FormItem className="flex flex-col">
      <FormLabel className="text-[#5D8966]"> Fecha de Nacimiento : </FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant={'outline'}
              className={cn(
                'w-full pl-3 text-left font-normal h-[2.813rem] border border-[#AAA] dark:bg-[#38352E]',
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
            className="dark:bg-[#38352E] border border-[#5D8966]"
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
