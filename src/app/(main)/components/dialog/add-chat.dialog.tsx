import type { FC, ReactElement } from 'react';

import { Dialog } from '@/components/ui';
import { useHandleModal } from '@/hooks';
import { ModalTypeKeys } from '@/models';

export const AddChannelDialog: FC = (): ReactElement => {
  const { isModalOpen, handleClose } = useHandleModal({
    modalType: ModalTypeKeys.ADD_CHAT,
  });

  return <Dialog open={isModalOpen}></Dialog>;
};
