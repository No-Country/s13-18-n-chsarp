'use client';

import { useEffect } from 'react';

import { useChannelStore } from './use.channel-store';

export const useChannels = () => {
  const { channels, getChannels } = useChannelStore();

  useEffect(() => {
    if (!channels) getChannels();
  }, [channels, getChannels]);

  return { channels };
};
