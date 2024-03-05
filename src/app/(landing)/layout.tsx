'use client';

import { redirect } from 'next/navigation';
import type { FC, PropsWithChildren, ReactElement } from 'react';

import { useUserContext } from '@/hooks';
import { AppRoutes } from '@/models';
import { Header } from './components';

const LandingLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  const { user } = useUserContext((state) => state);

  if (user?.token) redirect(AppRoutes.CHAT);

  return (
    <div className="relative">
      <Header />
      {children}
    </div>
  );
};

export default LandingLayout;
