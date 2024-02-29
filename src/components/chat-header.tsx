'use client';

import { cn } from '@/lib';
import { CircleEllipsis, Phone, Video, XCircle } from 'lucide-react';
import { Button } from './ui';

export const ChatHeader = () => {
  return (
    <div className="flex justify-between items-center text-white border-b-2 border-white dark:border-black pb-6 gap-12">
      <CircleEllipsis className="dark:text-black" />
      <div className="flex flex-1 justify-end">
        <Button
          variant="outline"
          className={cn('rounded-r-none text-black dark:text-white')}
        >
          <Phone />
        </Button>
        <Button
          variant="outline"
          className={cn('rounded-l-none text-black dark:text-white')}
        >
          <Video />
        </Button>
      </div>
      <XCircle className="dark:text-black" />
    </div>
  );
};
