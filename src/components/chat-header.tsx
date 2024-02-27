'use client';

import { cn } from '@/lib';
import { CircleEllipsis, Phone, Video, XCircle } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui';

export const ChatHeader = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex justify-between items-center text-white border-b-2 border-white dark:border-black pb-6 gap-12">
      <CircleEllipsis className="dark:text-black" />
      <div className="flex flex-1 justify-end">
        <Button
          className={cn(
            'rounded-r-none',
            resolvedTheme === 'dark' ? 'not-dark' : 'dark'
          )}
        >
          <Phone />
        </Button>
        <Button
          className={cn(
            'rounded-l-none',
            resolvedTheme === 'dark' ? 'not-dark' : 'dark'
          )}
        >
          <Video />
        </Button>
      </div>
      <XCircle className="dark:text-black" />
    </div>
  );
};
