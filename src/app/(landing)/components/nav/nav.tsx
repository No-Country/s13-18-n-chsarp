'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import type { FC, ReactElement } from 'react';

import { ModeToggle } from '@/components';
import { Button } from '@/components/ui';
import { cn } from '@/lib';
import { AppRoutes } from '@/models';
import Image from 'next/image';
import { useNav } from '../../hooks';
import { NavButtons, NavModal } from './nav_items';

export const Nav: FC = (): ReactElement => {
  const { isBigScreen, modalIsOpen, setModalIsOpen } = useNav();
  const handleClose = () => setModalIsOpen(false);

  return (
    <nav className={cn(modalIsOpen && 'h-full flex flex-col bg-background')}>
      <div className="flex justify-between items-center py-3 px-6">
        <h1 className="font-bold">
          <Link onClick={() => setModalIsOpen(false)} href={AppRoutes.HOME}>
            <Image
              src="/images/logo.svg"
              alt="no chat image"
              width={192}
              height={39}
            />
          </Link>
        </h1>
        <div className="flex justify-between items-center gap-x-4">
          <ModeToggle />
          <div className="flex gap-x-4 max-md:hidden">
            <NavButtons handleClose={handleClose} />
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
      </div>
      {modalIsOpen && !isBigScreen && <NavModal handleClose={handleClose} />}
    </nav>
  );
};
