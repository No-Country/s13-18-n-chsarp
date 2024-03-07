import { create, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { Axios } from '@/lib';
import { StoresNames } from '@/models';
import { CHANNEL_BASE_PATH } from '../models';
import { Channel } from '../models/channel.model';

interface ChannelStore {
  channels: Channel[] | null;
  loading: boolean;
  getChannels: () => Promise<void>;
  clearChannels: () => void;
}

const channelStore: StateCreator<ChannelStore> = (set) => ({
  channels: null,
  loading: false,
  getChannels: async () => {
    set({ loading: true });

    const url = CHANNEL_BASE_PATH;
    const response = await Axios.get(url);

    set({ loading: false });
    if (response?.data) set({ channels: response.data });
  },
  clearChannels: () => set({ channels: null }),
});

export const useChannelStore = create<ChannelStore>()(
  devtools(persist(channelStore, { name: StoresNames.channel }))
);
