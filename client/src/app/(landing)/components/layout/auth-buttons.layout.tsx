import type { FC, PropsWithChildren, ReactElement } from 'react';

import { AuthType, type AuthTypeProps } from '@/app/(landing)/models';

type AuthButtonsLayoutProps = PropsWithChildren & AuthTypeProps;

export const AuthButtonsLayout: FC<AuthButtonsLayoutProps> = ({
  children,
  authType,
}: AuthButtonsLayoutProps): ReactElement => {
  return (
    <div
      className={`${
        authType === AuthType.register ? 'flex justify-around items-center' : ''
      }`}
    >
      {children}
    </div>
  );
};
