'use client';
import { FC, ReactElement, useState } from 'react';
import { z } from 'zod';

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { cn } from '@/lib';
import React from 'react';
import { Loader2, Upload } from 'lucide-react';
import { format } from 'date-fns';
//import { usePreseleccion } from '@/hooks/use.preseleccion';
import { preseleccionSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  preseleccionDefaultValues,
  type PreseleccionSchema,
} from '@/app/preseleccion/models';

const PreseleccionPage: FC = (): ReactElement => {
  // const { form, status, handlePreseleccion } = usePreseleccion();
  const form = useForm<PreseleccionSchema>({
    resolver: zodResolver(preseleccionSchema),
    //defaultValues: preseleccionDefaultValues,
  });

  const fileRef = form.register('file');

  function onSubmit(values: z.infer<typeof preseleccionSchema>) {
    console.log(values);
  }

  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const selectedFile = event.target.files![0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    } else {
      setFileName('');
    }
  };

  return (
    <div className="bg-[#FFFDF9] dark:bg-[#FFFDF9] py-20 h-full mx-auto min-h-screen">
      <div
        className="bg-contain bg-start bg-no-repeat h-full flex justify-center"
        style={{ backgroundImage: 'url(./images/leaves-background.png)' }}
      >
        <div className="w-4/5	h-4/5	mx-auto rounded-2xl mt-16 md:mt-24 shadow-[0_4px_28px_0_rgba(0,0,0,0.25)]">
          <div className="bg-[#5D8966] text-white px-5 pb-5 pt-10 rounded-t-2xl">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-2">
              Formulario de preselección
            </h3>
            <p className="lg:text-2xl text-xl">
              ¡Gracias por querer formar parte de nuestra comunidad de apoyo
              emocional! <br />
              Por favor, completa este formulario con tus datos para poder ser
              mentor en nuestros grupos de apoyo. Luego de enviar el formulario,
              recibirás un correo con los pasos a seguir. ¡Estamos emocionados
              de tenerte con nosotros!
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-10 p-10 text-[#263238] relative bg-white rounded-b-2xl"
            >
              <p className="font-medium text-3xl md:text-3xl -ml-5">
                Información personal
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-2xl">
                        Nombre:
                      </FormLabel>
                      <FormControl className="border-x-0 border-t-0 border-b-[3px] shadow-none border-[#9EC79B] rounded-none w-full md:w-72">
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-2xl">
                        Apellido:
                      </FormLabel>
                      <FormControl className="border-x-0 border-t-0 border-b-[3px] shadow-none border-[#9EC79B] rounded-none w-full md:w-72">
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="birthdate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="font-semibold text-2xl">
                        Fecha de nacimiento:
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl className="bg-transparent border-x-0 border-t-0 border-b-[3px] shadow-none border-[#9EC79B] rounded-none w-full md:w-72">
                            <Button
                              variant={'outline'}
                              className="w-full pl-3 text-left font-normal"
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span></span>
                              )}
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
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-2xl">
                        Nacionalidad:
                      </FormLabel>
                      <FormControl className="border-x-0 border-t-0 border-b-[3px] shadow-none border-[#9EC79B] rounded-none w-full md:w-72">
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-2xl">
                        Género:
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="border-x-0 border-t-0 border-b-[3px] shadow-none border-[#9EC79B] rounded-none w-full md:w-72">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem
                            className="text-xl font-normal"
                            value="I prefer not to say"
                          >
                            Prefiero no decirlo
                          </SelectItem>
                          <SelectItem
                            className="text-xl font-normal"
                            value="male"
                          >
                            Masculino
                          </SelectItem>
                          <SelectItem
                            className="text-xl font-normal"
                            value="female"
                          >
                            Femenino
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="font-semibold text-2xl">
                          Cargar foto de perfil:
                        </FormLabel>
                        <label
                          className={cn(
                            'border-[#5D8966] border cursor-pointer text-[#5D8966] rounded-3xl h-[34px] text-2xl px-4 flex flex-row items-center gap-2 w-[154px]',
                            fileName &&
                              'bg-[#5D8966] text-white text-xl w-full md:w-fit md:max-w-72 truncate'
                          )}
                        >
                          {fileName ? (
                            fileName
                          ) : (
                            <>
                              <Upload className="h-6 w-6" />
                              UPLOAD
                            </>
                          )}
                          <FormControl>
                            <Input
                              className="hidden"
                              type="file"
                              {...fileRef}
                              onChange={handleFileChange}
                            />
                          </FormControl>
                        </label>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                {/* <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label className="font-semibold text-2xl" htmlFor="picture">
                    Cargar foto de perfil:
                  </Label>
                  <label
                    className={cn(
                      'border-[#5D8966] border cursor-pointer text-[#5D8966] rounded-3xl h-[34px] text-2xl px-4 flex flex-row items-center gap-2 w-[154px]',
                      fileName &&
                        'bg-[#5D8966] text-white text-xl w-full md:w-fit md:max-w-72 truncate'
                    )}
                  >
                    {fileName ? (
                      fileName
                    ) : (
                      <>
                        <Upload className="h-6 w-6" />
                        UPLOAD
                      </>
                    )}
                    <Input
                      id="picture"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div> */}
              </div>
              <p className="font-medium text-3xl md:text-3xl -ml-5">
                Información de contacto
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-2xl">
                        Teléfono:
                      </FormLabel>
                      <FormControl className="border-x-0 text-xl border-t-0 border-b-[3px] shadow-none border-[#9EC79B] rounded-none w-full md:w-72">
                        <Input {...field} />
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
                      <FormLabel className="font-semibold text-2xl">
                        Email:
                      </FormLabel>
                      <FormControl className="border-x-0 text-xl border-t-0 border-b-[3px] shadow-none border-[#9EC79B] rounded-none w-full md:w-72">
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <p className="font-medium text-2xl md:text-3xl -ml-5">
                Información de académica/profesional:
              </p>
              <FormField
                control={form.control}
                name="optionOne"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-xl/8 font-medium">
                      ¿Tienes experiencia previa en asesoramiento o mentoría en
                      temas relacionados con la salud mental y el bienestar
                      emocional?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row space-x-10 pl-20"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormLabel className="font-medium text-xl text-black">
                            Si
                          </FormLabel>
                          <FormControl>
                            <RadioGroupItem value="si" />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormLabel className="font-medium text-xl text-black">
                            No
                          </FormLabel>
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="optionTwo"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-xl/8 font-medium">
                      ¿Estás dispuesto/a a comprometerte a seguir un código de
                      ética y confidencialidad en tus interacciones con los
                      usuarios de la aplicación?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row space-x-10 pl-20"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormLabel className="font-medium text-xl text-black">
                            Si
                          </FormLabel>
                          <FormControl>
                            <RadioGroupItem value="si" />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormLabel className="font-medium text-xl text-black">
                            No
                          </FormLabel>
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="optionThree"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-xl/8 font-medium">
                      ¿Has recibido formación o capacitación en áreas relevantes
                      para brindar apoyo emocional, como psicología, trabajo
                      social, consejería, etc.?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row space-x-10 pl-20"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormLabel className="font-medium text-xl text-black">
                            Si
                          </FormLabel>
                          <FormControl>
                            <RadioGroupItem value="si" />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormLabel className="font-medium text-xl text-black">
                            No
                          </FormLabel>
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="optionFour"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-xl/8 font-medium">
                      ¿Comprendes la importancia de establecer límites claros y
                      saludables en tus interacciones con los usuarios,
                      incluyendo la derivación a profesionales de la salud
                      mental cuando sea necesario?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row space-x-10 pl-20"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormLabel className="font-medium text-xl text-black">
                            Si
                          </FormLabel>
                          <FormControl>
                            <RadioGroupItem value="si" />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormLabel className="font-medium text-xl text-black">
                            No
                          </FormLabel>
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex justify-end items-end">
                <Button
                  // disabled={!form.formState.isValid}
                  onClick={form.handleSubmit(onSubmit)}
                  className="bg-[#5D8966] hover:bg-[#22612F] text-white rounded-[32px] text-xl py-6 px-10"
                  type="submit"
                >
                  Enviar
                  {form.formState.isLoading && (
                    <Loader2 className="animate-spin h-5 w-5 ml-1.5" />
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PreseleccionPage;
