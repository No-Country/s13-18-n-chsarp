import { FC, ReactElement } from 'react';

import { AuthType, AuthTypeProps } from '../models';
import { AccountParagraph } from './account.paragraph';

export const AuthHeader: FC<AuthTypeProps> = ({
  authType,
}: AuthTypeProps): ReactElement => {
  const isRegister = authType === AuthType.register;
  return (
    <>
      <h2 className="text-4xl text-center">
        {' '}
        {isRegister
          ? '¡Nos alegra mucho que te sumes a ConTAnoS!'
          : '¡Que bueno volver a verte por aquí!'}{' '}
      </h2>
      <AccountParagraph authType={authType} />
    </>
  );
};
