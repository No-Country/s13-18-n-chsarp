import { Axios } from '@/lib';
import { AxiosCall } from '@/models';
import { loadAbort } from '@/utils';
import { CHANNEL_BASE_PATH, ChannelsRoutes } from '../models';
import { Channel } from '../models/channel.model';

export const channelService = (): AxiosCall<Channel[]> => {
  const url = CHANNEL_BASE_PATH;
  const Controller = loadAbort();

  return {
    call: Axios.get<Channel[]>(url),
    controller: Controller,
  };
};

export const getChannel = (channelName: string): AxiosCall<Channel> => {
  const url = CHANNEL_BASE_PATH + `/${channelName}`;
  const Controller = loadAbort();

  return {
    call: Axios.get<Channel>(url),
    controller: Controller,
  };
};
