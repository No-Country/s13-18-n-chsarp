import { Nav } from '@/components';
import type { FC, PropsWithChildren, ReactElement } from 'react';

const LandingLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <div className="relative">
      <header className="fixed top-0 bg-background w-full">
        <Nav />
      </header>
      {children}
    </div>
  );
};

export default LandingLayout;
