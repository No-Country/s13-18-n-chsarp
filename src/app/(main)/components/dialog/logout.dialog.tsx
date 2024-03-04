import type { FC, ReactElement } from 'react';

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { useUserActions } from '@/hooks';
import { Logout } from '../icons';

export const LogoutDialog: FC = (): ReactElement => {
  const { clearUser } = useUserActions();

  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-4 text-lg font-medium">
        <Logout />
        <span>Cerrar sesión</span>
      </DialogTrigger>
      <DialogContent className="bg-[#5D8966] border-none w-[90vw] md:w-[50vw] rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-3xl sm:text-[2.5rem]">
            Cerrar sesión
          </DialogTitle>
          <DialogDescription className="text-white text-center text-xl">
            ¿Estás seguro de cerrar la sesión?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="w-full flex sm:justify-around gap-2 items-center">
          <DialogClose asChild>
            <Button
              variant="default"
              className="
                text-white text-[22px] bg-[#2f9845] font-normal
                rounded-full px-[21px] hover:bg-[#22612F]
              "
            >
              Cancelar
            </Button>
          </DialogClose>
          <Button
            className="text-white text-[22px] font-normal rounded-full px-[21px]"
            variant="destructive"
            onClick={() => clearUser()}
          >
            Cerrar sesión
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
