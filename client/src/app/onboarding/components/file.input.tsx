import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';
import React, { FC, ReactElement } from 'react';

interface FileInputProps {
  fileRef: any;
}

export const FileInput: FC<FileInputProps> = ({ fileRef }): ReactElement => {
  return (
    <FormItem>
      <FormLabel className="font-semibold text-2xl">
        Cargar foto de perfil:
      </FormLabel>
      <FormControl className="text-xl border-x-0 border-t-0 border-b-[3px] shadow-none border-[#9EC79B] rounded-none w-full md:w-72">
        <Input type="file" {...fileRef} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
