import type { FC, ReactElement } from 'react';

import { Dialog, DialogContent, buttonVariants } from '@/components/ui';
import { useHandleModal } from '@/hooks';
import { cn } from '@/lib';
import { AppRoutes, ModalTypeKeys } from '@/models';
import Link from 'next/link';
import { useChannel } from '../../hooks/use.channel';

export const ChannelDialog: FC = (): ReactElement => {
  const { isModalOpen, handleClose } = useHandleModal({
    modalType: ModalTypeKeys.CHANNEL,
  });
  const { channel, status } = useChannel();

  console.log(channel);

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent
        className="
            w-[16rem] overflow-y-auto h-[97.5dvh]
            rounded-[1.5rem] md:rounded-[1.5rem] bg-[#5D8966]
             left-[15.5rem]
        "
      >
        {status.isLoading && (
          <div>
            <p className="text-center">Cargando...</p>
          </div>
        )}
        {!status.isLoading && !channel && <p>No hay información del canal</p>}
        {!status.isLoading && channel && (
          <div>
            <h1 className="font-bold mb-4 border-b-2 text-lg text-center">
              {channel.name || 'Channel'}
            </h1>
            {channel.sessions.length === 0 && (
              <p className="text-center">No hay chats creados todavía!</p>
            )}
            {channel.sessions.length > 0 && (
              <ul className="flex flex-col gap-2">
                {channel.sessions.map((session) => (
                  <li>
                    <Link
                      href={AppRoutes.CHAT_ID(session.channelId, session.id)}
                      onClick={handleClose}
                      className={cn(
                        buttonVariants({ variant: 'link', size: 'sm' }),
                        'px-0'
                      )}
                    >
                      <div>
                        <p className="text-lg"># {session.name}</p>
                        {/* TODO: add date */}
                        {/* <p>{session.initDate}</p> */}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
