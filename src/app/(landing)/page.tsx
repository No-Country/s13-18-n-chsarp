'use client';
import { Button, buttonVariants } from '@/components/ui';
import { cn } from '@/lib';
import Image from 'next/image';
import type { FC, ReactElement } from 'react';

const LandingPage: FC = (): ReactElement => {
  return (
    <div className="bg-[#FFFDF9] dark:bg-[#FFFDF9] pt-16 h-full mx-auto min-h-screen">
      <div className="container p-8 md:p-12 relative min-h-[750px] md:min-h-[650px] min-w-80">
        <div className="max-w-3xl	lg:text-5xl sm:text-4xl text-3xl font-bold text-[#1A202C]">
          <h2 className="font-normal mb-5 leading-normal">
            Cada historia <span className="text-[#0F7D7C]">importa</span>.
          </h2>
          <p className="leading-normal">
            Comparte la tuya <br /> y encuentra el
            <span className="text-[#9EC79B]"> apoyo</span> que necesitas.
          </p>
          <p className="md:mt-10 sm:mt-8 mt-6 text-[#4A5568] text-lg/9 mb-6 lg:mb-10">
            Empatía, comprensión y apoyo en cada interacción.
          </p>
          <div className="w-full md:w-48 flex flex-col gap-6 lg:gap-8">
            <Button
              className={cn(
                buttonVariants({
                  className:
                    'text-white dark:text-white bg-[#5D8966] shadow-3xl',
                  size: 'lg',
                  variant: 'default',
                })
              )}
            >
              Quiero compartir →
            </Button>
            <Button
              className={cn(
                buttonVariants({
                  className:
                    'text-white dark:text-white bg-[#263238] shadow-3xl',
                  size: 'lg',
                  variant: 'default',
                })
              )}
            >
              Quiero escuchar →
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 py-12 pr-8 md:pr-12">
          <div className="w-[306px] md:w-[408px] lg:w-[510px] h-[190px] md:h-[252px] lg:h-[315px] relative">
            <Image
              alt="Imagen Principal"
              src="/images/landing.png"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
