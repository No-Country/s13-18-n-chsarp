'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import type { FC, ReactElement } from 'react';

import { ModeToggle } from '@/components';
import { Button } from '@/components/ui';
import { cn } from '@/lib';
import { AppRoutes } from '@/models';
import { useNav } from '../../hooks';
import { NavButtons, NavModal } from './nav_items';

export const Nav: FC = (): ReactElement => {
  const { isBigScreen, modalIsOpen, setModalIsOpen } = useNav();
  const handleClose = () => setModalIsOpen(false);

  return (
    <nav className={cn(modalIsOpen && 'h-screen flex flex-col bg-background')}>
      <div className="flex justify-between items-center py-3 px-6 border-b-2">
        <h1 className="font-bold">
          <Link onClick={() => setModalIsOpen(false)} href={AppRoutes.HOME}>
            ConTAnoS
          </Link>
        </h1>
        <div className="flex gap-x-4 max-md:hidden">
          <NavButtons handleClose={handleClose} />
          <ModeToggle />
        </div>

        <Button
          className="md:hidden"
          variant="outline"
          size="icon"
          onClick={() => setModalIsOpen((prevState) => !prevState)}
        >
          {!modalIsOpen && <Menu className="h-[1.2rem] w-[1.2rem]" />}
          {modalIsOpen && <X className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </div>
      {modalIsOpen && !isBigScreen && <NavModal handleClose={handleClose} />}
    </nav>
  );
};
