'use client';
import React, { FC, ReactElement } from 'react';
import { Button, Form, FormField } from '@/components/ui';
import { Loader2 } from 'lucide-react';
import { usePreseleccion } from '@/hooks/use.preseleccion';
import { ControllerRenderProps } from 'react-hook-form';

import {
  CommonInput,
  ContainerFormPreseleccion,
  DateInput,
  FileInput,
  OptionsRadioGroup,
  ParagraphHeader,
  SubtitleForm,
} from './components';

const PreseleccionPage: FC = (): ReactElement => {
  const { form, status, handlePreseleccion } = usePreseleccion();

  // const fileRef = form.register('file');

  return (
    <ContainerFormPreseleccion>
      <ParagraphHeader />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handlePreseleccion)}
          className="space-y-10 p-10 text-[#263238] relative bg-white rounded-b-2xl"
        >
          <SubtitleForm subtitle="Información personal" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <CommonInput
                  disabled
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
                  disabled
                  label="Apellido"
                  field={field as ControllerRenderProps<any, 'lastname'>}
                />
              )}
            />
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => <DateInput field={field} disabled />}
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
              render={({ field }) => (
                <CommonInput
                  label="Género"
                  field={field as ControllerRenderProps<any, 'gender'>}
                  disabled
                />
              )}
            />
            {/* <FormField
              control={form.control}
              name="file"
              render={({ field }) => {
                return <FileInput fileRef={fileRef} />;
              }}
            /> */}
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
                  disabled
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
              onClick={form.handleSubmit(handlePreseleccion)}
              className="bg-[#5D8966] hover:bg-[#22612F] text-white rounded-[32px] text-xl py-6 px-10"
              type="submit"
            >
              Enviar
              {status.isLoading && (
                <Loader2 className="animate-spin h-5 w-5 ml-1.5" />
              )}
            </Button>
          </div>
        </form>
      </Form>
    </ContainerFormPreseleccion>
  );
};

export default PreseleccionPage;
