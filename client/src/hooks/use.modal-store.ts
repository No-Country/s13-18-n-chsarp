import { create, type StateCreator } from 'zustand';

import { ModalType } from '@/models';

interface GenericData {
  title: string;
  description: string;
}

interface ChannelData {
  channelName: string;
}

interface ModalData {
  genericData?: GenericData;
  channelData?: ChannelData;
}

interface ModalState {
  type: ModalType | null;
  isOpen: boolean;
  data?: ModalData;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

const modalStore: StateCreator<ModalState> = (set) => ({
  type: null,
  isOpen: false,
  data: undefined,
  onOpen: (type, data) => set({ isOpen: true, type, data }),
  onClose: () =>
    set({
      type: null,
      isOpen: false,
      data: undefined,
    }),
});

export const useModal = create<ModalState>()(modalStore);
