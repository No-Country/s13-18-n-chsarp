'use client';

import { useCallback, useEffect, useState } from 'react';

import { useFetchAndLoad, useModal, useUserContext } from '@/hooks';
import { channelAdapter } from '../adapters';
import {
  AddChatSchema,
  ChannelAdapted,
  HandleCreateChatFn,
} from '../models/channel.model';
import { createChat, getChannel } from '../services';

export const useChannel = () => {
  const { user } = useUserContext((state) => state);

  const [channel, setChannel] = useState<ChannelAdapted | null>(null);
  const { data } = useModal();
  const { loading, callEndpoint } = useFetchAndLoad();

  const handleChannel = useCallback(
    async (channelName: string) => {
      const response = await callEndpoint(getChannel(channelName));

      if (response.data) {
        const channel = channelAdapter(response.data);
        setChannel(channel);
      }
    },
    [callEndpoint]
  );

  // TODO: placeholder
  const handleCreateChat: HandleCreateChatFn = useCallback(
    async (values: AddChatSchema, channelId: number) => {
      const initDate = new Date(values.datetime);

      initDate.setHours(initDate.getHours() + 1);

      const newTimestamp = initDate.toISOString();

      const placeholderValues = {
        channelId,
        name: values.chatname,
        init_Date: values.datetime,
        close_Date: newTimestamp,
      };

      if (user?.token) {
        try {
          await callEndpoint(createChat(placeholderValues, user.token));

          setChannel(null);
        } catch (err) {
          console.log(err);
        }
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

  return { channel, status: { isLoading: loading }, handleCreateChat };
};
