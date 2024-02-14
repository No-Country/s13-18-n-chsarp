import type { FC, ReactElement, PropsWithChildren } from 'react';

const MainLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  return <>{children}</>;
};

export default MainLayout;
