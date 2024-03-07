import {
  BrokenImage,
  Delete,
  Doc,
  Pdf,
  PersonOff,
  UserFillIcon,
} from '@/app/(main)/components/icons';
import { ModalSection } from '@/app/(main)/components/modal-info/modal-section';
import { Button } from '@/components/ui';
import { ChevronRight, Edit2, Plus, Search, Star, X } from 'lucide-react';

interface ModalInfoProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalInfo = ({ isOpen, onClose }: ModalInfoProps) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className={`${isOpen ? 'absolute bg-transparent/50 z-20 inset-0 h-full' : 'hidden'}`}
    >
      <div className="bg-[#517759] shadow-[20px_20px_33px_0_rgba(0,0,0,0.75)] rounded-[30px] min-w-80 w-80 md:w-[550px] overflow-y-auto h-[97.5dvh] flex flex-col items-start p-4">
        <button className="">
          <X className="h-6 w-6" strokeWidth={3} />
        </button>
        <div className="flex flex-col gap-3">
          <ModalSection className="border-none">
            <h2 className="flex flex-row gap-2 text-3xl md:text-[40px] items-center justify-center font-bold text-white self-center">
              Gestión del Estres <Edit2 className="h-7 w-7 fill-white" />
            </h2>
            <div className="flex flex-row items-center justify-center text-white">
              <p className="text-base/5 text-white italic text-center w-10/12 line-clamp-2">
                Recibir consejos sobre cómo manejar situaciones estresantes y
                técnicas para la relajación.
              </p>
              <Edit2 className="h-7 w-7 fill-white" />
            </div>
            <p className="text-base text-[#C3C5C7] italic text-center self-center">
              Chat - 3 miembros
            </p>
          </ModalSection>
          <ModalSection>
            <p className="text-base text-[#C3C5C7] italic">
              Chat creado por ti, el 27/02/2024 a la(s) 10:30
            </p>
            <div className="flex justify-between items-center text-white w-full">
              <p className="text-base italic">Archivos, enlaces y documentos</p>
              <ChevronRight className="h-7 w-7" />
            </div>
            <div className="flex flex-row items-end gap-2.5 flex-wrap">
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
          </ModalSection>
          <ModalSection>
            <div className="flex justify-between items-center text-white w-full">
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
                <div className="flex flex-row gap-4 md:gap-7 items-center">
                  <div className="bg-[#d9d9d9] h-[70px] w-[70px] flex items-center justify-center rounded-full">
                    <UserFillIcon />
                  </div>
                  <p className="text-white dark:text-white font-semibold">Tu</p>
                </div>
                <p className="text-white dark:text-white font-semibold text-sm px-1 bg-[#9EC79BCC]/80 rounded">
                  Mentor/ra del grupo
                </p>
              </div>
              <div className="flex flex-row gap-4 md:gap-7 items-center">
                <div className="bg-[#d9d9d9] h-[70px] w-[70px] flex items-center justify-center rounded-full">
                  <UserFillIcon />
                </div>
                <p className="text-white dark:text-white font-semibold">Tu</p>
              </div>
              <div className="flex flex-row gap-4 md:gap-7 items-center">
                <div className="bg-[#d9d9d9] h-[70px] w-[70px] flex items-center justify-center rounded-full">
                  <UserFillIcon />
                </div>
                <p className="text-white dark:text-white font-semibold">Tu</p>
              </div>
            </div>
          </ModalSection>
          <ModalSection className="text-[#F29683] items-start">
            <Button
              variant="outline"
              className="bg-transparent border-none shadow-none hover:bg-transparent hover:text-red-400 p-0 gap-3 text-xl  hover:fill-red-400 font-semibold"
            >
              <PersonOff />
              Eliminar participante
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-none shadow-none hover:bg-transparent hover:text-red-400 p-0 gap-3 text-xl hover:fill-red-400 font-semibold"
            >
              <Delete />
              Cerrar chat
            </Button>
          </ModalSection>
        </div>
      </div>
    </div>
  );
};
