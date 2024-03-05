'use client';

import { cn } from '@/lib';
import { AppRoutes } from '@/models';
import { CircleEllipsis, Phone, Video, XCircle } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from './ui';

export const ChatHeader = () => {
  const { channelId, chatId } = useParams();

  return (
    <div className="flex justify-between items-center text-white px-6 py-3 gap-12">
      <CircleEllipsis className="dark:text-black" />
      <div className="flex flex-1 justify-end">
        <Button
          variant="outline"
          className={cn('rounded-r-none text-black dark:text-white')}
        >
          <Phone />
        </Button>
        <Link href={AppRoutes.CALL(+channelId, +chatId)}>
          <Button
            variant="outline"
            className={cn('rounded-l-none text-black dark:text-white')}
          >
            <Video />
          </Button>
        </Link>
      </div>
      <XCircle className="dark:text-black" />
    </div>
  );
};
