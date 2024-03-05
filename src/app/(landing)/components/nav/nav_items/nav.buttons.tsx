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
              className:
                'bg-gradient-to-br from-green-400 to-teal-400 dark:text-white',
            }),
            mobile && 'w-full'
          )}
        >
          Inicia sesión
        </Button>
      </li>
      <li>
        <Button
          onClick={() => handleNav(ModalType.REGISTER)}
          className={cn(
            buttonVariants(),
            mobile && 'w-full',
            'bg-gradient-to-br from-green-700 via-green-800 to-teal-700 dark:text-white'
          )}
        >
          Registrate
        </Button>
      </li>
    </ul>
  );
};
