import type { FC, ReactElement } from 'react';

import { ScrollArea } from '@/components/ui';
import { useChannels } from '../hooks';
import { ChannelItem } from './channel.item';

export const Channels: FC = (): ReactElement => {
  const { channels } = useChannels();

  return (
    <ScrollArea className="flex-1 w-full">
      {channels?.map((channel) => (
        <ChannelItem
          key={channel.id}
          channelId={channel.id}
          channelName={channel.name}
          channelImg={channel.logoIcon}
        />
      ))}
    </ScrollArea>
  );
};
