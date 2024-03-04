import type { FC, ReactElement } from 'react';

import { Dialog, DialogContent } from '@/components/ui';
import { useHandleModal } from '@/hooks';
import { ModalTypeKeys } from '@/models';
import { useChannel } from '../../hooks/use.channel';

export const ChannelDialog: FC = (): ReactElement => {
  const { isModalOpen, handleClose } = useHandleModal({
    modalType: ModalTypeKeys.CHANNEL,
  });
  const { channel, status } = useChannel();

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent
        className="
            w-[13rem] overflow-y-auto h-[97.5dvh]
            rounded-[1.5rem] md:rounded-[1.5rem] bg-[#5D8966]
            h-[97.5vh] left-[14rem]
        "
      >
        {status.isLoading && <p>Cargando...</p>}
        {!channel && <p> No hay información del canal </p>}
        {channel && <h1>{channel?.name}</h1>}
      </DialogContent>
    </Dialog>
  );
};
