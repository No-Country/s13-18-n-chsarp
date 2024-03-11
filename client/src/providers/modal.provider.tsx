'use client';

import type { FC, ReactElement } from 'react';

import { LoginModal, RegisterModal } from '@/app/(landing)/components/modals';
import { MentorReviewModal } from '@/app/test/components/modals';
import { useMounted } from '@/hooks';
import { ChannelDialog } from '@/app/(main)/components/dialog';

export const ModalProvider: FC = (): ReactElement | null => {
  useMounted({ valueToReturn: null });

  return (
    <>
      <LoginModal />
      <RegisterModal />
      <MentorReviewModal />
      <ChannelDialog />
    </>
  );
};
