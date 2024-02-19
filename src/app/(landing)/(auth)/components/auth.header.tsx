import { FC, ReactElement } from 'react';

import { AppRoutes } from '@/models';
import { AuthType } from '../models';

interface AuthHeaderProps {
  authType: AuthType;
}

export const AuthHeader: FC = (): ReactElement => {
  return (
    <>
      <h2 className="text-4xl text-center">
        {' '}
        ¡Nos alegra mucho que te sumes a ConTAnoS!{' '}
      </h2>
      <p>
        ¿Ya tienes una cuenta?{' '}
        <a
          className="underline hover:text-[#5D8966] transition-colors"
          href={AppRoutes.SIGN_IN}
        >
          Inicia sesión
        </a>
      </p>
    </>
  );
};
