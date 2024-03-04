'use client';

import type { FC, JSX } from 'react';

import { cn } from '@/lib';
import { ModalTypeKeys } from '@/models';
import { useChangeButton } from '../hooks';
import { ChannelImage } from './channel.image';

interface ChangeChannelButtonProps {
  channelId: number;
  channelName: string;
  imgUrl: string;
}

export const ChangeChannelButton: FC<ChangeChannelButtonProps> = ({
  channelId,
  channelName,
  imgUrl,
}: ChangeChannelButtonProps): JSX.Element => {
  const { params, handleClick } = useChangeButton({
    id: channelId,
    channelName,
    modalType: ModalTypeKeys.CHANNEL,
  });

  return (
    <button onClick={handleClick} className="group relative flex items-center">
      <div
        className={cn(
          'absolute left-0 bg-primary rounded-r-full transition-all w-[4px]',
          params?.channelId !== channelId.toString() && 'group-hover:h-[20px]',
          params?.channelId === channelId.toString() ? 'h-[36px]' : 'h-[8px]'
        )}
      />
      <ChannelImage
        paramsChannelId={params?.channelId}
        channelId={channelId}
        imgUrl={imgUrl}
        alt={channelName}
      />
    </button>
  );
};
