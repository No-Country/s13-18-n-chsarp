'use client';

import { cn } from '@/lib';
import { AppRoutes } from '@/models';
import { CircleEllipsis, Video, XCircle } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from './ui';

interface ChatHeaderProps {
  openModalInfo: () => void;
}

export const ChatHeader = ({ openModalInfo }: ChatHeaderProps) => {
  const { channelId, chatId } = useParams();

  return (
    <div className="flex justify-between items-center text-white px-6 py-3 gap-12">
      <Button
        onClick={openModalInfo}
        variant="outline"
        size="icon"
        className="bg-transparent border-none shadow-none hover:bg-transparent p-0"
      >
        <CircleEllipsis className="dark:text-black" />
      </Button>
      <div className="flex flex-1 justify-end">
        {/* <Button
          variant="outline"
          className={cn('rounded-r-none text-black dark:text-white')}
        >
          <Phone />
        </Button> */}
        <Link href={AppRoutes.CALL(+channelId, +chatId)}>
          <Button
            variant="outline"
            className={cn('text-black dark:text-white')}
          >
            <Video />
          </Button>
        </Link>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="bg-transparent border-none shadow-none hover:bg-transparent p-0"
      >
        <Link href={AppRoutes.CHANNEL}>
          <XCircle className="dark:text-black" />
        </Link>
      </Button>
    </div>
  );
};
