import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import { useHandleModal } from '@/hooks';
import { ModalTypeKeys } from '@/models';
import { FC, ReactElement } from 'react';
import { MentorReviewForm } from './forms';

interface MainModalProps {
  title: string;
  description: string;
  modalType: ModalTypeKeys.MENTOR_REVIEW;
}

export const MainModal: FC<MainModalProps> = ({
  title,
  modalType,
}): ReactElement => {
  const { isModalOpen, handleClose } = useHandleModal({
    modalType,
  });

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deja una Reseña al Mentor</DialogTitle>
          <DialogDescription>
            ¡La comunidad espera ansiosa tu aporte! 🌟
          </DialogDescription>
        </DialogHeader>
        {modalType === ModalTypeKeys.MENTOR_REVIEW && <MentorReviewForm />}
      </DialogContent>
    </Dialog>
  );
};
