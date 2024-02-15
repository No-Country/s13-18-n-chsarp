import type { FC, PropsWithChildren, ReactElement } from 'react';

import { ModeToggle } from '@/components';

const MainLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <div className="flex h-screen relative">
      <div className="w-1/6">TODO: Sidebar</div>
      <div className="w-5/6">{children}</div>
      {/* placeholder */}
      <div className="rounded-full absolute right-5 bottom-5">
        <ModeToggle />
      </div>
    </div>
  );
};

export default MainLayout;
