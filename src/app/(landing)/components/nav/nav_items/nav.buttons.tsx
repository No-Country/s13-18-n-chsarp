'use client';

import type { FC, ReactElement } from 'react';

import { Button, buttonVariants } from '@/components/ui';
import { useModal } from '@/hooks';
import { cn } from '@/lib';
import { ModalType } from '@/models';
import { NavProps } from '../../../models';

interface NavButtonsProps extends NavProps {
  mobile?: boolean;
}

export const NavButtons: FC<NavButtonsProps> = ({
  mobile,
  handleClose,
}: NavButtonsProps): ReactElement => {
  const { onOpen } = useModal();
  const handleNav = (modalType: ModalType) => {
    onOpen(modalType);
    handleClose();
  };

  return (
    <ul className={cn('flex gap-x-4', mobile && 'flex-col gap-y-4')}>
      <li>
        <Button
          onClick={() => handleNav(ModalType.LOGIN)}
          className={cn(
            buttonVariants({
              variant: 'outline',
              className: 'text-black dark:text-white',
            }),
            mobile && 'w-full'
          )}
        >
          Ingreso
        </Button>
      </li>
      <li>
        <Button
          onClick={() => handleNav(ModalType.REGISTER)}
          className={cn(buttonVariants(), mobile && 'w-full')}
        >
          Registro
        </Button>
      </li>
    </ul>
  );
};
