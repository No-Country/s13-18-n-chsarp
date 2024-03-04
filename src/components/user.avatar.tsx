import type { FC, ReactElement } from 'react';

import { cn } from '@/lib';
import { Avatar, AvatarFallback, AvatarImage } from './ui';

interface UserAvatarProps {
  src?: string;
  className?: string;
  alt?: string;
}

export const UserAvatar: FC<UserAvatarProps> = ({
  src,
  className,
  alt,
}: UserAvatarProps): ReactElement => {
  const defaultAvatar = (
    <AvatarImage src="/images/user-default.webp" alt="usuario" />
  );
  const avatarClassNames = 'h-12 w-12';

  return (
    <Avatar className={cn(avatarClassNames, className)}>
      {src ? <AvatarImage src={src} alt={`foto de ${alt}`} /> : defaultAvatar}
      <AvatarFallback className={cn(avatarClassNames, className)}>
        {defaultAvatar}
      </AvatarFallback>
    </Avatar>
  );
};
