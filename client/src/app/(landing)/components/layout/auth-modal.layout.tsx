'use client';

import type { FC, ReactElement } from 'react';

import { Dialog, DialogContent } from '@/components/ui';
import { useHandleModal } from '@/hooks';
import { ModalTypeKeys } from '@/models';
import { SignInForm, SignUpForm } from '../forms';

interface AuthModalLayoutProps {
  modalType: ModalTypeKeys.REGISTER | ModalTypeKeys.LOGIN;
}

export const AuthModalLayout: FC<AuthModalLayoutProps> = ({
  modalType,
}: AuthModalLayoutProps): ReactElement => {
  const { isModalOpen, handleClose } = useHandleModal({
    modalType,
  });

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent
        className="
          max-h-[90dvh] min-w-[17rem] overflow-y-auto
          rounded-md sm:max-w-[51rem] lg:w-max w-10/12
          border border-[#5D8966] dark:bg-[#38352E]
        "
      >
        {modalType === ModalTypeKeys.REGISTER ? <SignUpForm /> : <SignInForm />}
      </DialogContent>
    </Dialog>
  );
};
