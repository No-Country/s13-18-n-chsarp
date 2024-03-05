import { useParams, useRouter } from 'next/navigation';

import { useHandleModal } from '@/hooks';
import { AppRoutes, ModalType } from '@/models';

/**
 * Hook for nav item functionalities.
 *
 * @param param0 - Props with id.
 */
export const useChangeButton = ({
  id,
  channelName,
  modalType,
}: {
  id: number;
  channelName: string;
  modalType: keyof typeof ModalType;
}) => {
  /**
   * App router hook.
   */
  const router = useRouter();

  /**
   * Url params hook.
   */
  const params = useParams();

  const { isModalOpen, onOpen, handleClose } = useHandleModal({ modalType });

  /**
   * Handler to redirect to specific server.
   */
  const handleClick = (): void => {
    if (!isModalOpen) {
      onOpen(ModalType.CHANNEL, { channelData: { channelName } });
    }

    if (params.channelId !== id.toString()) {
      router.push(AppRoutes.CHANNEL_ID(id));
    }
  };

  return { router, params, handleClick };
};
