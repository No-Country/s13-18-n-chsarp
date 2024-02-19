import type { FC, ReactElement } from 'react';
import Link from 'next/link';

import { AppRoutes } from '@/models';
import { AuthType, AuthTypeProps } from '../models';

export const AccountParagraph: FC<AuthTypeProps> = ({
  authType,
}: AuthTypeProps): ReactElement => {
  const isRegister = authType === AuthType.register;
  const authText = (registerType: boolean) =>
    registerType ? 'Crea tu cuenta' : 'Inicia sesión';

  return (
    <p>
      ¿{isRegister ? 'Ya' : 'No'} tienes una cuenta?{' '}
      <Link
        className="underline hover:text-[#5D8966] transition-colors"
        href={isRegister ? AppRoutes.SIGN_IN : AppRoutes.SIGN_UP}
      >
        {authText(!isRegister)}
      </Link>
    </p>
  );
};
