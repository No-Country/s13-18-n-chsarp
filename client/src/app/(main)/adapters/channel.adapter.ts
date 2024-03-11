import { ChannelAdapted } from '../models/channel.model';

export const channelAdapter = (channel: any): ChannelAdapted => ({
  id: channel.id,
  name: channel.name,
  description: channel.description,
  sessions: channel.sessions,
});
