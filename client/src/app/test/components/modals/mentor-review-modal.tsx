import { ModalTypeKeys } from '@/models';
import { FC, ReactElement } from 'react';
import { MainModal } from '../main-modal';

export const MentorReviewModal: FC = (): ReactElement => {
  return (
    <MainModal
      title="Deja una Reseña al Mentor"
      description="¡La comunidad espera ansiosa tu aporte! 🌟"
      modalType={ModalTypeKeys.MENTOR_REVIEW}
    />
  );
};
