import type { FC, PropsWithChildren, ReactElement } from 'react';

import { Header } from './components';

const LandingLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <div className="relative">
      <Header />
      {children}
    </div>
  );
};

export default LandingLayout;
