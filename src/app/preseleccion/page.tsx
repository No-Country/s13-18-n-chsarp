'use client';
import React, { FC, ReactElement } from 'react';
import { z } from 'zod';
import { Button, Form, FormField } from '@/components/ui';
import { Loader2 } from 'lucide-react';
//import { usePreseleccion } from '@/hooks/use.preseleccion';
import { preseleccionSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControllerRenderProps, useForm } from 'react-hook-form';

import {
  preseleccionDefaultValues,
  type PreseleccionSchema,
} from '@/app/preseleccion/models';
import {
  CommonInput,
  DateInput,
  FileInput,
  GenderInput,
  OptionsRadioGroup,
  ParagraphHeader,
  SubtitleForm,
} from './components';

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

  return (
    <div className="bg-[#FFFDF9] dark:bg-[#FFFDF9] py-20 h-full mx-auto min-h-screen">
      <div
        className="bg-contain bg-start bg-no-repeat h-full flex justify-center"
        style={{ backgroundImage: 'url(./images/leaves-background.png)' }}
      >
        <div className="w-4/5	h-4/5	mx-auto rounded-2xl mt-16 md:mt-24 shadow-[0_4px_28px_0_rgba(0,0,0,0.25)]">
          <ParagraphHeader />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-10 p-10 text-[#263238] relative bg-white rounded-b-2xl"
            >
              <SubtitleForm subtitle="Información personal" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <CommonInput
                      label="Nombre"
                      field={field as ControllerRenderProps<any, 'name'>}
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <CommonInput
                      label="Apellido"
                      field={field as ControllerRenderProps<any, 'lastname'>}
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => <DateInput field={field} />}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <CommonInput
                      label="Nacionalidad"
                      field={field as ControllerRenderProps<any, 'country'>}
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => <GenderInput field={field} />}
                />
                <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => {
                    return <FileInput fileRef={fileRef} />;
                  }}
                />
                {/*<FormItem>
                        <FormLabel className="font-semibold text-2xl">
                          Cargar foto de perfil:
                        </FormLabel>
                        <FormControl className="border-x-0 border-t-0 border-b-[3px] shadow-none border-[#9EC79B] rounded-none w-full md:w-72">
                          <Input type="file" {...fileRef} />
                        </FormControl>
                        <FormMessage />
                </FormItem>*/}
              </div>
              <SubtitleForm subtitle="Información de contacto" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <CommonInput
                      label="Teléfono"
                      field={field as ControllerRenderProps<any, 'phone'>}
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <CommonInput
                      label="Email"
                      field={field as ControllerRenderProps<any, 'email'>}
                    />
                  )}
                />
              </div>
              <SubtitleForm subtitle="Información de académica/profesional:" />
              <FormField
                control={form.control}
                name="optionOne"
                render={({ field }) => (
                  <OptionsRadioGroup
                    field={field as ControllerRenderProps<any, 'optionOne'>}
                    label="¿Tienes experiencia previa en asesoramiento o mentoría en
                      temas relacionados con la salud mental y el bienestar
                      emocional?"
                  />
                )}
              />
              <FormField
                control={form.control}
                name="optionTwo"
                render={({ field }) => (
                  <OptionsRadioGroup
                    field={field as ControllerRenderProps<any, 'optionTwo'>}
                    label="¿Estás dispuesto/a a comprometerte a seguir un código de
                      ética y confidencialidad en tus interacciones con los
                      usuarios de la aplicación?"
                  />
                )}
              />
              <FormField
                control={form.control}
                name="optionThree"
                render={({ field }) => (
                  <OptionsRadioGroup
                    field={field as ControllerRenderProps<any, 'optionThree'>}
                    label="¿Has recibido formación o capacitación en áreas relevantes
                      para brindar apoyo emocional, como psicología, trabajo
                      social, consejería, etc.?"
                  />
                )}
              />
              <FormField
                control={form.control}
                name="optionFour"
                render={({ field }) => (
                  <OptionsRadioGroup
                    field={field as ControllerRenderProps<any, 'optionFour'>}
                    label="¿Comprendes la importancia de establecer límites claros y
                      saludables en tus interacciones con los usuarios,
                      incluyendo la derivación a profesionales de la salud
                      mental cuando sea necesario?"
                  />
                )}
              />
              <div className="w-full flex justify-end items-end">
                <Button
                  disabled={!form.formState.isValid}
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
