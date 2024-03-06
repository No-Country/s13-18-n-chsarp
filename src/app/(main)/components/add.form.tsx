'use client';

import Image from 'next/image';
import { useState, type FC, type ReactElement } from 'react';

import { NewChatForm } from '@/components';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { cn } from '@/lib';
import { AddChat } from '.';
import { HandleCreateChatFn } from '../models/channel.model';

export interface AddFormProps {
  channelId: number;
  channelName: string;
  channelDescription: string;
  handleCreateChat: HandleCreateChatFn;
}

export const AddForm: FC<AddFormProps> = ({
  channelId,
  channelName,
  channelDescription,
  handleCreateChat,
}): ReactElement => {
  const [step, setStep] = useState(0);

  return (
    <Dialog>
      <DialogTrigger className="flex justify-center">
        <AddChat />
      </DialogTrigger>
      <DialogContent
        className={cn(
          'bg-[#5D8966] border-none max-w-[660px] w-4/5 rounded-[30px] px-10',
          step === 0 && 'flex items-center'
        )}
      >
        {step === 0 && (
          <div className="flex flex-col items-center gap-4 mt-[72px] py-[25px] w-full border-white border-2 rounded-[20px]">
            <DialogHeader className="flex flex-col items-center gap-2">
              <DialogTitle className="text-center font-bold text-[26px]">
                {channelName}
              </DialogTitle>
              <Image
                src="/images/create-chat-modal.svg"
                alt="Create chat modal"
                width={147}
                height={141}
              />
              <DialogDescription className="text-white text-center text-lg max-w-[470px] mx-auto">
                <p>{channelDescription}</p>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Dialog>
                <DialogTrigger className="flex items-center gap-4 text-2xl font-medium">
                  <Button
                    onClick={() => setStep(1)}
                    className="text-[22px] bg-[#FCD07F] border-none font-medium rounded-full px-6 hover:bg-transparent"
                  >
                    Crear chat +
                  </Button>
                </DialogTrigger>
              </Dialog>
            </DialogFooter>
          </div>
        )}
        {step === 1 && (
          <>
            <DialogHeader className="flex flex-col gap-[22px] items-center w-full overflow-y-auto">
              <DialogTitle className="font-bold text-[40px] text-wrap">
                Chat de {channelName}
              </DialogTitle>
              <DialogDescription className="text-white text-xl">
                ¡La comunidad espera ansiosa por tu chat de apoyo! 🌟
              </DialogDescription>
              <Image
                src="/images/create-chat-modal.svg"
                alt="Create chat modal"
                width={269}
                height={183}
                className="object-contain"
              />
            </DialogHeader>
            <NewChatForm
              channelId={channelId}
              handleCreateChat={handleCreateChat}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
