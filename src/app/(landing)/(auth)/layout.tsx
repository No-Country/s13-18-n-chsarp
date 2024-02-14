import type { FC, PropsWithChildren, ReactElement } from 'react';

const AuthLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  return <>{children}</>;
};

export default AuthLayout;
