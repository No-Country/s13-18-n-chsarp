'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import type { FC, ReactElement } from 'react';

import { Button, buttonVariants } from '@/components/ui';
import { cn } from '@/lib';
import { AppRoutes } from '@/models';
import { useNav } from '../../hooks';
import { ModeToggle, NavModal } from './nav_items';

export const Nav: FC = (): ReactElement => {
  const { isBigScreen, modalIsOpen, setModalIsOpen } = useNav();

  return (
    <nav className={cn(modalIsOpen && 'h-screen flex flex-col bg-background')}>
      <div className="flex justify-between items-center py-3 px-6 border-b-2">
        <h1 className="font-bold">
          <Link onClick={() => setModalIsOpen(false)} href={AppRoutes.HOME}>
            ConTAnoS
          </Link>
        </h1>
        <div className="flex gap-x-4 max-md:hidden">
          <ul className="flex gap-x-4">
            <li>
              <Link
                href={AppRoutes.SIGN_IN}
                className={buttonVariants({ variant: 'outline' })}
              >
                Ingreso
              </Link>
            </li>
            <li>
              <Link href={AppRoutes.SIGN_UP} className={buttonVariants()}>
                Registro
              </Link>
            </li>
          </ul>
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
      {modalIsOpen && !isBigScreen && (
        <NavModal handleClose={() => setModalIsOpen(false)} />
      )}
    </nav>
  );
};
