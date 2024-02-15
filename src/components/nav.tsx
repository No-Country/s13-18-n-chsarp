'use client';

import { cn } from '@/lib';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ModeToggle } from './mode-toggle';
import NavModal from './nav-modal';
import { Button, buttonVariants } from './ui';

export const Nav = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    if (modalIsOpen && isBigScreen) {
      setModalIsOpen(false);
    }
  }, [isBigScreen]);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalIsOpen]);

  return (
    <>
      <nav
        className={cn(modalIsOpen && 'h-screen flex flex-col bg-background')}
      >
        <div className="flex justify-between items-center py-3 px-6 border-b-2">
          <h1 className="font-bold">
            <Link onClick={() => setModalIsOpen(false)} href="/">
              ConTAnoS
            </Link>
          </h1>
          <div className="flex gap-x-4 max-md:hidden">
            <ul className="flex gap-x-4">
              <li>
                <Link
                  href="/sign-in"
                  className={buttonVariants({ variant: 'outline' })}
                >
                  Ingreso
                </Link>
              </li>
              <li>
                <Link href="/sign-up" className={buttonVariants()}>
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
            {!modalIsOpen && <Menu className="h-[1.2rem] w-[1.2rem" />}
            {modalIsOpen && <X className="h-[1.2rem] w-[1.2rem" />}
          </Button>
        </div>
        {modalIsOpen && !isBigScreen && (
          <NavModal handleClose={() => setModalIsOpen(false)} />
        )}
      </nav>
    </>
  );
};
