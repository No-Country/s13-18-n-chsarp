import { useModal } from '@/hooks';
import { ModalType, type ModalTypeProps } from '@/models';

/**
 * Hook para manejar los modales de la aplicación.
 *
 * @param { UseModalInfoProps } param0 - Props del manejador del hook de modal.
 */
export const useHandleModal = ({ modalType }: ModalTypeProps) => {
  const { isOpen, data, type, onOpen, onClose } = useModal();

  /**
   * Verificación del modal específico abierto.
   */
  const isModalOpen = isOpen && type === ModalType[modalType];

  /**
   * Funcionalidad para cerrar el modal.
   */
  const handleClose = (): void => {
    onClose();
  };

  return { data, isModalOpen, onOpen, handleClose };
};
