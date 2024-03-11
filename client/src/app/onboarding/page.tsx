'use client';
import { Button, Form, FormField } from '@/components/ui';
import { usePreseleccion } from '@/hooks/use.preseleccion';
import { Loader2 } from 'lucide-react';
import { FC, ReactElement, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import Image from 'next/image';
import {
  CommonInput,
  ContainerFormPreseleccion,
  DateInput,
  FileInput,
  OptionsRadioGroup,
  ParagraphHeader,
  SubtitleForm,
} from './components';
import { useConfirmUser } from './hooks';

const PreseleccionPage: FC = (): ReactElement => {
  const [isMentor, setIsMentor] = useState(false);

  const { success: userSuccess, handleConfirmUser } = useConfirmUser();

  const {
    form,
    status,
    success: mentorSuccess,
    handlePreseleccion,
  } = usePreseleccion();

  const fileRef = form.register('file');

  if (mentorSuccess || userSuccess) {
    return (
      <div className="bg-[#FFFDF9] dark:bg-[#FFFDF9] flex items-center justify-center min-h-screen w-full py-5">
        <div className="flex flex-col items-center w-4/5">
          <p className="text-black text-5xl">¡Felicitaciones!</p>
          <Image
            src="/images/group-hug.png"
            alt="group hug"
            width={657}
            height={436}
            className="mt-12"
          />
          <p className="text-black mt-12 text-3xl">
            Completaste tu registro en ConTAnoS
          </p>
          <p className="text-black text-center text-xl mt-6 font-light">
            {mentorSuccess
              ? 'Estamos emocionados de tenerte con nosotros y esperamos ver el increíble impacto que tendrás en la vida de nuestros usuarios'
              : 'Estamos encantados de tenerte con nosotros. Juntos, vamos a recorrer un camino de apoyo, crecimiento y bienestar emocional.'}
          </p>
          <p className="text-black text-center mt-6 text-2xl italic">
            {mentorSuccess
              ? '¡Bienvenido/a a nuestro equipo de mentores y mentoras!'
              : '¡Gracias por unirte a nosotros en este viaje de autoconocimiento!'}
          </p>
          <Image
            src="/images/pictorial-mark.png"
            alt="pictorial mark"
            width={75}
            height={65}
            className="mt-12"
          />
        </div>
      </div>
    );
  }

  if (!isMentor) {
    return (
      <div className="bg-[#FFFDF9] dark:bg-[#FFFDF9] flex items-center justify-center h-screen w-full">
        <div className="rounded-lg border-2 px-5 p-3 bg-[#5D8966] flex gap-3">
          <Button onClick={handleConfirmUser}>
            Soy paciente{' '}
            {status.isLoading && (
              <Loader2 className="animate-spin h-5 w-5 ml-1.5" />
            )}
          </Button>
          <Button onClick={() => setIsMentor(true)}>Soy Mentor</Button>
        </div>
      </div>
    );
  }

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
            {/* <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <CommonInput
                  disabled
                  label="Apellido"
                  field={field as ControllerRenderProps<any, 'lastname'>}
                />
              )}
            /> */}
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
            <FormField
              control={form.control}
              name="file"
              render={() => <FileInput fileRef={fileRef} />}
            />
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
