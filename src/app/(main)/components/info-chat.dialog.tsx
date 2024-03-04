'use client';
import { FC, ReactElement } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  ChevronRight,
  CircleEllipsis,
  Edit2,
  Plus,
  Search,
  Star,
  TrashIcon,
  UserRoundX,
} from 'lucide-react';
import {
  Pdf,
  Doc,
  BrokenImage,
  UserFillIcon,
} from '@/app/(main)/components/icons';

export const InfoChatDialog: FC = (): ReactElement => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-transparent border-none shadow-none hover:bg-transparent p-0"
        >
          <CircleEllipsis className="dark:text-black" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#517759] rounded-[30px] overflow-y-auto w-[500px] h-[90vh] border-none shadow-[20px_20px_33px_0_rgba(0,0,0,0.75)]">
        <DialogHeader>
          <DialogTitle className="flex flex-row gap-2 text-3xl md:text-[40px] items-center justify-center font-bold text-white">
            Gestión del Estres <Edit2 className="h-7 w-7 fill-white" />
          </DialogTitle>
          <div className="flex flex-row items-center justify-center text-white">
            <DialogDescription className="text-base/5 text-white italic text-center w-10/12 line-clamp-2">
              Recibir consejos sobre cómo manejar situaciones estresantes y
              técnicas para la relajación.
            </DialogDescription>
            <Edit2 className="h-7 w-7 fill-white" />
          </div>
          <p className="text-base text-[#C3C5C7] italic text-center">
            Chat - 3 miembros
          </p>
        </DialogHeader>
        <div className="h-[1px] w-full bg-white"></div>
        <p className="text-base text-[#C3C5C7] italic">
          Chat creado por ti, el 27/02/2024 a la(s) 10:30
        </p>
        <div className="flex justify-between items-center text-white">
          <p className="text-base italic">Archivos, enlaces y documentos</p>
          <ChevronRight className="h-7 w-7" />
        </div>
        <div className="flex flex-row items-end gap-2.5 scroll-auto">
          <div className="bg-[#d9d9d9] p-3 md:p-5 rounded-[20px]">
            <BrokenImage />
          </div>
          <div className="bg-[#d9d9d9] p-3 md:p-5 rounded-[20px]">
            <Pdf />
          </div>
          <div className="bg-[#d9d9d9] p-3 md:p-5 rounded-[20px]">
            <Doc />
          </div>
          <div className="bg-[#d9d9d9] p-1.5 md:p-3 rounded-full">
            <Plus className="h-9 w-9 text-[#517759]" />
          </div>
        </div>
        <div className="h-[1px] w-full bg-white"></div>
        <div className="flex justify-between items-center text-white">
          <div className="text-base flex gap-4 items-center font-semibold">
            <Star className="fill-white" />
            Mensajes desatacados
          </div>
          <ChevronRight className="h-7 w-7" />
        </div>
        <div className="flex justify-between items-center text-white">
          <p className="text-base font-semibold">3 miembros</p>
          <Search />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-start">
            <div className="flex flex-row gap-7 items-center">
              <div className="bg-[#d9d9d9] h-[70px] w-[70px] flex items-center justify-center rounded-full">
                <UserFillIcon />
              </div>
              <p className="text-white dark:text-white font-semibold">Tu</p>
            </div>
            <p className="text-white dark:text-white font-semibold text-sm px-1.5 bg-[#9EC79BCC]/80 rounded">
              Mentor/ra del grupo
            </p>
          </div>
          <div className="flex flex-row gap-7 items-center">
            <div className="bg-[#d9d9d9] h-[70px] w-[70px] flex items-center justify-center rounded-full">
              <UserFillIcon />
            </div>
            <p className="text-white dark:text-white font-semibold">Tu</p>
          </div>
          <div className="flex flex-row gap-7 items-center">
            <div className="bg-[#d9d9d9] h-[70px] w-[70px] flex items-center justify-center rounded-full">
              <UserFillIcon />
            </div>
            <p className="text-white dark:text-white font-semibold">Tu</p>
          </div>
        </div>
        <div className="h-[1px] w-full bg-white"></div>
        <div className="flex flex-col items-start text-[#F29683]">
          <Button
            variant="outline"
            className="bg-transparent border-none shadow-none hover:bg-transparent hover:text-red-400 p-0 gap-3 text-xl font-semibold"
          >
            <UserRoundX />
            Eliminar participante
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-none shadow-none hover:bg-transparent hover:text-red-400 p-0 gap-3 text-xl font-semibold"
          >
            <TrashIcon />
            Cerrar chat
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
