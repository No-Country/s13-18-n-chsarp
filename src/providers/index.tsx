import type { FC, PropsWithChildren, ReactElement } from 'react';

import { ModalProvider } from './modal.provider';
import { NotistackProvider } from './notistack.provider';
import { ThemeProvider } from './theme-provider';

export const GlobalProviders: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="contanos-theme"
    >
      <ModalProvider />
      <NotistackProvider>{children}</NotistackProvider>
    </ThemeProvider>
  );
};
