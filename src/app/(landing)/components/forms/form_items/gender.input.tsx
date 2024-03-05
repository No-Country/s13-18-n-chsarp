import type { FC, ReactElement } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';

import type { SignUpSchema } from '@/app/(landing)/models';
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui';

interface GenderInputProps {
  field: ControllerRenderProps<SignUpSchema, 'gender'>;
}

export const GenderInput: FC<GenderInputProps> = ({
  field,
}: GenderInputProps): ReactElement => {
  return (
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
            <FormLabel className="font-normal">Prefiero no decirlo</FormLabel>
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
  );
};
