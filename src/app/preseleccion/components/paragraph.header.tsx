import React, { FC, ReactElement } from 'react';

export const ParagraphHeader: FC = (): ReactElement => {
  return (
    <div className="bg-[#5D8966] text-white px-5 pb-5 pt-10 rounded-t-2xl">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-2">
        Formulario de preselección
      </h3>
      <p className="lg:text-2xl text-xl">
        ¡Gracias por querer formar parte de nuestra comunidad de apoyo
        emocional! <br />
        Por favor, completa este formulario con tus datos para poder ser mentor
        en nuestros grupos de apoyo. Luego de enviar el formulario, recibirás un
        correo con los pasos a seguir. ¡Estamos emocionados de tenerte con
        nosotros!
      </p>
    </div>
  );
};
