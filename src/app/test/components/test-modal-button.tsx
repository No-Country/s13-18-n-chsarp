'use client';

import { Button } from '@/components/ui';
import { useModal } from '@/hooks';
import { ModalType } from '@/models';
import { FC, ReactElement } from 'react';

export const TestModalButton: FC = (): ReactElement => {
  const { onOpen } = useModal();

  return (
    <Button onClick={() => onOpen(ModalType.MENTOR_REVIEW)}>
      Prueba Reseña Mentor
    </Button>
  );
};
