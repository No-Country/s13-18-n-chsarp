'use client';
import { Button } from '@/components/ui';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';

export default function NotFoundPage(): ReactElement {
  return (
    <div className="h-screen bg-[#FFFDF9] dark:bg-[#FFFDF9] ">
      <div className="flex flex-col gap-6 items-center justify-center pt-20">
        <Image
          src="/images/404.png"
          alt="Page not found"
          width={360}
          height={270}
        />
        <h1 className="text-5xl mt-2 font-semibold text-[#0F7D7C] sm:text-4xl">
          Uh-oh!
        </h1>
        <p className="text-black text-xl">No podemos encontrar esa página.</p>
        <Link href="/">
          <Button className="bg-gradient-to-br from-[#ACC3B2] to-[#8ABEBD] dark:text-white">
            Volver al inicio.
          </Button>
        </Link>
      </div>
    </div>
  );
}
