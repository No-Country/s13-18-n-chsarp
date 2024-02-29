'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { HubConnection } from '@microsoft/signalr';
import { SendHorizontalIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form, FormField, Input } from './ui';

interface ChatInputProps {
  connection: HubConnection | null;
  setConnection: (newConnection: HubConnection | null) => void;
}

export function ChatInput({ connection, setConnection }: ChatInputProps) {
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    message: z.string().min(1),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  });

  const sendMessage = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      if (connection) {
        let result = await connection.invoke('SendMessage', values.message);
        if (result === 'Disconnected') {
          setConnection(null);
        } else {
          form.reset();
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        autoComplete="off"
        onSubmit={form.handleSubmit(sendMessage)}
        className="flex gap-4 w-full"
      >
        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <Input
              disabled={isLoading}
              placeholder="Tu mensaje"
              className="dark:text-white text-black bg-background"
              {...field}
            />
          )}
        />

        <Button type="submit" className="bg-[#137d7b] text-[#F29683]">
          <SendHorizontalIcon />
        </Button>
      </form>
    </Form>
  );
}
