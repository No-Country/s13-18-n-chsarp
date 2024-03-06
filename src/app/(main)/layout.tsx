'use client';

import { redirect } from 'next/navigation';
import type { FC, PropsWithChildren, ReactElement } from 'react';

import { ModeToggle } from '@/components';
import { useUserContext } from '@/hooks';
import { AppRoutes } from '@/models';
import { Sidebar } from './components';
import { MobileToggle } from './components/mobile.toggle';

const MainLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  const { user } = useUserContext((state) => state);

  if (!user?.token) redirect(AppRoutes.HOME);
  if (!user?.onboarded) redirect(AppRoutes.ONBOARDING);

  return (
    <div className="flex gap-[30px] h-screen relative p-2">
      <div className="hidden md:flex w-[6rem] z-30 flex-col fixed inset-y-0 py-2">
        <Sidebar />
      </div>
      <main className="md:ml-[7rem] h-full bg-[#5D8966] rounded-[30px] w-full">
        {children}
      </main>
      {/* placeholder */}
      <div className="rounded-full absolute right-5 top-5">
        <ModeToggle />
      </div>
      <div className="absolute md:hidden bottom-5 left-5 bg-white rounded-lg">
        <MobileToggle />
      </div>
    </div>
  );
};

export default MainLayout;
