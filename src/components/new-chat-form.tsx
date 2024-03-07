'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { HandleCreateChatFn } from '@/app/(main)/models/channel.model';
import { FC, ReactElement } from 'react';
import {
  Button,
  DialogClose,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from './ui';

export const addChatSchema = z.object({
  chatname: z.string().min(3, {
    message: 'El nombre debe contener al menos 3 caracteres.',
  }),
  chatdescription: z.string().min(3, {
    message: 'La descripcion debe contener al menos 3 caracteres.',
  }),
  datetime: z.string().min(3, {
    message: 'Es obligatorio que elijas una fecha',
  }),
});

// TODO: placeholder
export interface NewChatFormProps {
  channelId: number;
  handleCreateChat: HandleCreateChatFn;
}

export const NewChatForm: FC<NewChatFormProps> = ({
  channelId,

  handleCreateChat,
}): ReactElement => {
  // const { handleCreateChat } = useChannel();

  const form = useForm<z.infer<typeof addChatSchema>>({
    resolver: zodResolver(addChatSchema),
    defaultValues: {
      chatname: '',
      chatdescription: '',
      datetime: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof addChatSchema>) => {
    handleCreateChat(values, channelId);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-[45px] w-4/5 mx-auto"
      >
        <FormField
          control={form.control}
          name="datetime"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-4">
              <div className="flex justify-between items-center max-md:block">
                <FormLabel className="text-lg">
                  Fecha y hora de mentoreo:
                </FormLabel>
                <FormControl>
                  <Input
                    type="datetime-local"
                    {...field}
                    className="border-[#9EC79B] border-b-[3px] border-t-0 border-x-0 rounded-none placeholder:font-light placeholder:text-white placeholder:italic focus-visible:ring-0 w-auto max-md:w-full max-md:flex max-md:justify-center"
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="chatname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Nombre del chat:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Escribe un nombre para tu chat de apoyo"
                  {...field}
                  className="border-[#9EC79B] border-b-[3px] border-t-0 border-x-0 rounded-none placeholder:font-light placeholder:text-white placeholder:italic focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="chatdescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Descripción del chat:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Cuéntanos brevemente de qué se trata tu chat de apoyo"
                  {...field}
                  className="border-[#9EC79B] border-b-[3px] border-t-0 border-x-0 rounded-none placeholder:font-light placeholder:text-white placeholder:italic focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose asChild>
          <Button
            type="submit"
            variant="default"
            className="self-end text-[22px] bg-[#FCD07F80] font-normal rounded-full px-[24px] hover:bg-transparent"
          >
            Crear chat +
          </Button>
        </DialogClose>
      </form>
    </Form>
  );
};
