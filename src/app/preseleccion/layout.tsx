'use client';

import type { FC, PropsWithChildren, ReactElement } from 'react';

import { Header } from '../(landing)/components/header';

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
