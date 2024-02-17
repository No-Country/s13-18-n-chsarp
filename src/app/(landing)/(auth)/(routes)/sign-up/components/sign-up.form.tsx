'use client';

import { format } from 'date-fns';
import { CalendarIcon, Loader2 } from 'lucide-react';
import type { FC, ReactElement } from 'react';

import {
  Button,
  Calendar,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui';
import { cn } from '@/lib';
import { useSignUp } from '../hooks';

export const SignUpForm: FC = (): ReactElement => {
  const { form, status, handleSignUp } = useSignUp();

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-5"
        onSubmit={form.handleSubmit(handleSignUp)}
      >
        <h2 className="text-4xl text-center"> Registrate </h2>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Nombre : </FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tu Nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel> E-Mail : </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingresa tu E-mail"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Contraseña : </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingresa tu Contraseña"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel> Fecha de Nacimiento : </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full pl-3 text-left font-normal',
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
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel> Género : </FormLabel>
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
                    <FormLabel className="font-normal">
                      Prefiero no decirlo
                    </FormLabel>
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
          )}
        />
        <Button
          className="
            mt-5 bg-black text-white hover:border hover:border-black dark:bg-white dark:text-black
            hover:bg-white hover:text-black dark:hover:border-white dark:hover:bg-black
            dark:hover:text-white
          "
          type="submit"
        >
          Registrate
          {status.isLoading && (
            <Loader2 className="animate-spin h-5 w-5 ml-1.5" />
          )}
        </Button>
      </form>
    </Form>
  );
};
