'use client';

import { useCallback, useEffect, useState } from 'react';

import { useFetchAndLoad, useModal } from '@/hooks';
import { channelAdapter } from '../adapters';
import { ChannelAdapted } from '../models/channel.model';
import { getChannel } from '../services';

export const useChannel = () => {
  const [channel, setChannel] = useState<ChannelAdapted | null>(null);
  const { data } = useModal();
  const { loading, callEndpoint } = useFetchAndLoad();

  const handleChannel = useCallback(
    async (channelName: string) => {
      const response = await callEndpoint(getChannel(channelName));

      console.log(response);
      if (response.data) {
        const channel = channelAdapter(response.data);
        setChannel(channel);
      }
    },
    [callEndpoint]
  );

  useEffect(() => {
    if (
      data?.channelData?.channelName &&
      channel?.name !== data?.channelData.channelName
    )
      handleChannel(data?.channelData.channelName);
  }, [channel, data, handleChannel]);

  return { channel, status: { isLoading: loading } };
};
