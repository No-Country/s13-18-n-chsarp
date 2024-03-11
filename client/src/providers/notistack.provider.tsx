'use client';

import { SnackbarProvider } from 'notistack';
import type { FC, PropsWithChildren } from 'react';

import { SnackbarConfig } from '@/utils';

export const NotistackProvider: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <SnackbarProvider>
      <SnackbarConfig />
      {children}
    </SnackbarProvider>
  );
};
