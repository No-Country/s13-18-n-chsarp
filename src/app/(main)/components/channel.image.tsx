import type { FC, JSX } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui';
import { cn } from '@/lib';

interface ChannelImageProps {
  paramsChannelId?: string | string[];
  channelId: number;
  imgUrl: string;
  alt: string;
}

export const ChannelImage: FC<ChannelImageProps> = ({
  paramsChannelId,
  channelId,
  imgUrl,
  alt,
}: ChannelImageProps): JSX.Element => {
  const channelNameArray = alt.split(' ');
  const channelTitle =
    channelNameArray[0][0] + channelNameArray[1][0].toUpperCase();

  return (
    <div
      className={cn(
        'mx-5 relative group flex h-[3.4rem] w-[3.4rem] rounded-[1.5rem] group-hover:rounded-[16px] transition-all overflow-hidden',
        paramsChannelId === channelId.toString() &&
          'bg-primary/10 text-primary rounded-[1.2rem]'
      )}
    >
      <Avatar className="w-full h-full rounded-none">
        <AvatarImage
          fetchPriority="high"
          width={48}
          height={48}
          src={imgUrl}
          alt={alt}
        />
        <AvatarFallback className="rounded-none">{channelTitle}</AvatarFallback>
      </Avatar>
    </div>
  );
};
