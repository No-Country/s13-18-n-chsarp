import { useState } from 'react';

export const useModalInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalInfo = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    openModalInfo,
    closeModal,
  };
};
