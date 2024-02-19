import { create, type StateCreator } from 'zustand';

import { ModalType } from '@/models';

interface ModalState {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

const modalStore: StateCreator<ModalState> = (set) => ({
  type: null,
  isOpen: false,
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: () => set({ type: null, isOpen: false }),
});

export const useModal = create<ModalState>()(modalStore);
