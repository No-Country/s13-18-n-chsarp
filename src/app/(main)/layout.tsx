import type { FC, PropsWithChildren, ReactElement } from 'react';

import { ModeToggle } from '@/components';
import { Sidebar } from './components';

const MainLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <div className="flex gap-[30px] h-screen relative p-6">
      <Sidebar />
      <div className="w-full bg-[#5D8966] rounded-[30px]">
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
