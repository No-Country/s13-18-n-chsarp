import type { FC, ReactElement } from 'react';

import { Nav } from './nav';

export const Header: FC = (): ReactElement => {
  return (
    <header className="fixed top-0 bg-white w-full z-10 shadow-4xl">
      <Nav />
    </header>
  );
};
