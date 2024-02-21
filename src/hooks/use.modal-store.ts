import { create, type StateCreator } from 'zustand';

import { ModalType } from '@/models';

interface GenericData {
  title: string;
  description: string;
}

interface ModalData {
  genericData: GenericData;
}

interface ModalState {
  type: ModalType | null;
  isOpen: boolean;
  data: null | ModalData;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

const modalStore: StateCreator<ModalState> = (set) => ({
  type: null,
  isOpen: false,
  data: null,
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: () => set({ type: null, isOpen: false }),
});

export const useModal = create<ModalState>()(modalStore);
