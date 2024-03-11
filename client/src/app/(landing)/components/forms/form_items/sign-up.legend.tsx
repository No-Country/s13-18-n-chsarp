import type { FC, ReactElement } from 'react';

export const SignUpLegend: FC = (): ReactElement => {
  return (
    <>
      <fieldset className="flex items-baseline gap-x-2 accent-[#5D8966]">
        <input type="checkbox" id="emails" />
        <label htmlFor="emails">
          Quiero recibir correos sobre ConTAnoS, fechas especiales en la
          comunidad e información de relevancia sobre temas que me interesan.
        </label>
      </fieldset>
      <p>
        Al crear una cuenta, accedes a los{' '}
        <a className="underline">Terminos de uso</a> y a la{' '}
        <a className="underline">Política de privacidad.</a>
      </p>
    </>
  );
};
