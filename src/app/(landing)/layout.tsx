import type { FC, ReactElement, PropsWithChildren } from 'react';

const LandingLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  return <>{children}</>;
};

export default LandingLayout;
