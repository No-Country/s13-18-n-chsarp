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
import { UserHelp } from '../icons';

export const UserHelpDialog: FC = (): ReactElement => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-4 text-lg font-medium">
        <UserHelp />
        <span>Ayuda</span>
      </DialogTrigger>
      <DialogContent className="bg-[#5D8966] border-none w-[700px]">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-[40px]">
            Ayuda
          </DialogTitle>
          <DialogDescription className="text-white text-center text-xl">
            <p>¿Necesitas ayuda?</p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="default"
              className="text-white text-[22px] bg-[#0F7D7C59] font-normal rounded-full px-[21px] hover:bg-transparent"
            >
              Cancelar
            </Button>
          </DialogClose>
          <Button
            className="text-white text-[22px] bg-[#0F7D7C59] font-normal rounded-full px-[21px] hover:bg-transparent"
            onClick={() => console.log('Cerrando sesión')}
          >
            Ir al panel de ayuda
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
