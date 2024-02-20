'use client';

import type { FC, PropsWithChildren, ReactElement } from 'react';

import { useUserStore } from '@/hooks';
import { AppRoutes } from '@/models';
import { redirect } from 'next/navigation';
import { Header } from './components';

const LandingLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  const { user } = useUserStore();

  if (user?.token) redirect(AppRoutes.CHAT);

  return (
    <div className="relative">
      <Header />
      {children}
    </div>
  );
};

export default LandingLayout;
