'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: 'El comentario debe tener al menos 10 caracteres.',
    })
    .max(160, {
      message: 'El comentario no debe superar los 160 caracteres',
    }),
});

export function MentorReviewForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('submit');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comentario:</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Contanos como fue tu experiencia"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Te parece que el mentor puede mejorar en algo? Agregalo!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
}
