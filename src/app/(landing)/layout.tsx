'use client';

import { redirect } from 'next/navigation';
import type { FC, PropsWithChildren, ReactElement } from 'react';

import { useModal, useUserContext } from '@/hooks';
import { AppRoutes } from '@/models';
import { Header } from './components';
import { Footer } from './components/footer';

const LandingLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  const { user } = useUserContext((state) => state);
  const { data } = useModal();

  console.log(data);

  if (user?.token) redirect(AppRoutes.CHANNEL);

  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
