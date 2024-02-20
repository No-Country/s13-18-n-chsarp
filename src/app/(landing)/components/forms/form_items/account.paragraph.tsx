'use client';

import type { FC, ReactElement } from 'react';

import { Button } from '@/components/ui';
import { useModal } from '@/hooks';
import { ModalType } from '@/models';
import { AuthType, AuthTypeProps } from '../models';

export const AccountParagraph: FC<AuthTypeProps> = ({
  authType,
}: AuthTypeProps): ReactElement => {
  const { onOpen, onClose } = useModal();
  const isRegister = authType === AuthType.register;

  const authText = (registerType: boolean) =>
    registerType ? 'Crea tu cuenta' : 'Inicia sesión';

  const handleOpen = (modalType: ModalType) => {
    onClose();
    onOpen(modalType);
  };

  return (
    <p>
      ¿{isRegister ? 'Ya' : 'No'} tienes una cuenta?{' '}
      <Button
        className="p-0 underline underline-offset-2 hover:text-[#5D8966] hover:no-underline transition-colors"
        type="button"
        variant="link"
        onClick={() =>
          handleOpen(!isRegister ? ModalType.REGISTER : ModalType.LOGIN)
        }
      >
        {authText(!isRegister)}
      </Button>
    </p>
  );
};
