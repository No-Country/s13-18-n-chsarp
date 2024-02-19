'use client';

import type { FC, ReactElement } from 'react';

import { LoginModal, RegisterModal } from '@/app/(landing)/components/modals';
import { useMounted } from '@/hooks';

export const ModalProvider: FC = (): ReactElement | null => {
  useMounted({ valueToReturn: null });

  return (
    <>
      <LoginModal />
      <RegisterModal />
    </>
  );
};
