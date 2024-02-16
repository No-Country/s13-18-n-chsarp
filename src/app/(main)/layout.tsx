import type { FC, PropsWithChildren, ReactElement } from 'react';

import { ModeToggle } from '@/components';

const MainLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <div className="flex h-screen relative p-6">
      <div className="w-1/6">TODO: Sidebar</div>
      <div className="w-5/6 bg-[#5D8966] rounded-2xl">
        <div className="p-6 h-full">{children}</div>
      </div>
      {/* placeholder */}
      <div className="rounded-full absolute right-5 top-5">
        <ModeToggle />
      </div>
    </div>
  );
};

export default MainLayout;
