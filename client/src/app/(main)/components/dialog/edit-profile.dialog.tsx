import { FC, ReactElement } from 'react';

import { UserEditForm } from '@/components';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { UserSettings } from '../icons';

export const EditProfileDialog: FC = (): ReactElement => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-4 text-lg font-medium">
        <UserSettings />
        <span>Configuración de perfil</span>
      </DialogTrigger>
      <DialogContent className="bg-[#5D8966] border-none space-y-4">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-[44px] text-center">
            Configuración de perfil
          </DialogTitle>
          <DialogDescription className="text-white text-xl text-center">
            Esta es la descripción
          </DialogDescription>
        </DialogHeader>
        <UserEditForm />
      </DialogContent>
    </Dialog>
  );
};
