'use client';
import { SendHorizonalIcon } from 'lucide-react';
import { Button, Input } from './ui';

export function ChatInput() {
  return (
    <div className="flex gap-4 w-full">
      <Input className="not-dark bg-white text-black" />
      <Button className="dark">
        <SendHorizonalIcon className="dark " />
      </Button>
    </div>
  );
}
