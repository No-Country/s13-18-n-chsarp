'use client';

import { CircleEllipsis, Phone, Video, XCircle } from 'lucide-react';
import { Button } from './ui';

export const ChatHeader = () => {
  return (
    <div className="flex justify-between items-center text-white border-b-2 border-white pb-6 gap-12 ">
      <CircleEllipsis />
      <div className="flex flex-1 justify-end">
        <Button className="rounded-r-none dark">
          <Phone className="dark" />
        </Button>
        <Button className="rounded-l-none dark">
          <Video className="dark" />
        </Button>
      </div>
      <XCircle />
    </div>
  );
};
