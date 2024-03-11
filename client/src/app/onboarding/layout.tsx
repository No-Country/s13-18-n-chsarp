'use client';

import type { FC, PropsWithChildren, ReactElement } from 'react';

import { useUserContext } from '@/hooks';
import { AppRoutes } from '@/models';
import { redirect } from 'next/navigation';

const OnboardingLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  const { user } = useUserContext((state) => state);

  if (!user?.token) redirect(AppRoutes.HOME);
  if (user?.onboarded) redirect(AppRoutes.CHANNEL);

  return <div className="relative">{children}</div>;
};

export default OnboardingLayout;
