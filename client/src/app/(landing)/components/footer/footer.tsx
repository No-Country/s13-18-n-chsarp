import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AppRoutes } from '@/models';
import { CollaboratorsModal } from './collaborators.modal';

export const Footer = () => {
  return (
    <footer className="bg-[#D6EFDB] dark:bg-[#D6EFDB] ">
      <div className="max-w-6xl	mx-auto py-12 p-6 sm:px-12 xl:px-0 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-6">
          <Link href={AppRoutes.HOME}>
            <Image
              src="/images/logo.svg"
              alt="no chat image"
              width={192}
              height={39}
            />
          </Link>
          <div>
            <div className="text-black text-[22px] font-semibold text-center md:text-right">
              Web de Apoyo Emocional
            </div>
            <p className="mt-2 max-w-80 md:max-w-[500px] text-center md:text-right text-black text-[18px]/5 font-light">
              Un espacio digital donde la empatía y el apoyo se unen para
              fortalecer la salud emocional de nuestra comunidad.
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between md:flex-row flex-col-reverse items-center mt-6 md:mt-11 gap-6">
          <p className="text-xs text-black font-light">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
          <CollaboratorsModal />
        </div>
      </div>
    </footer>
  );
};
