import { Eye, EyeOff } from 'lucide-react';
import { useState, type FC, type ReactElement } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';

import {
  Button,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';
import { PasswordInstructions } from './password.instructions';

interface PasswordInputProps {
  field: ControllerRenderProps<any, 'password'>;
}

export const PasswordInput: FC<PasswordInputProps> = ({
  field,
}: PasswordInputProps): ReactElement => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShow = () => setShowPassword(!showPassword);

  return (
    <FormItem className="flex flex-col">
      <div className="flex flex-1 justify-between">
        <FormLabel className="text-[#5D8966]"> Contraseña : </FormLabel>
        <Button
          className="bg-transparent hover:bg-transparent px-0 mx-0 text-[#5D8966] gap-x-2 h-1"
          type="button"
          onClick={handleShow}
        >
          {showPassword ? (
            <EyeOff className="w-4 h-4 text-[#5D8966]" />
          ) : (
            <Eye className="w-4 h-4 text-[#5D8966]" />
          )}
          {showPassword ? 'Ocultar' : 'Mostrar'}
        </Button>
      </div>
      <FormControl>
        <Input
          className="h-[2.813rem]"
          placeholder="Ingresa tu Contraseña"
          type={showPassword ? 'text' : 'password'}
          {...field}
        />
      </FormControl>
      <PasswordInstructions />
      <FormMessage />
    </FormItem>
  );
};
