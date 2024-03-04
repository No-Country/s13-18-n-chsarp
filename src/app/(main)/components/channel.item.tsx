import type { FC, ReactElement } from 'react';

import { ActionTooltip } from '@/components';
import { ChangeChannelButton } from './change-channel.button';

interface ChannelItemProps {
  channelId: number;
  channelName: string;
  channelImg: any;
}

export const ChannelItem: FC<ChannelItemProps> = ({
  channelId,
  channelName,
  channelImg,
}: ChannelItemProps): ReactElement => {
  return (
    <div className="mb-4">
      <ActionTooltip side="right" align="center" label={channelName}>
        <ChangeChannelButton
          channelId={channelId}
          channelName={channelName}
          imgUrl={channelImg}
        />
      </ActionTooltip>
    </div>
  );
};
