import type { FC, PropsWithChildren, ReactElement } from 'react';

import { ModalProvider } from './modal.provider';
import { NotistackProvider } from './notistack.provider';
import { ThemeProvider } from './theme-provider';
import { UserProvider } from './user.provider';

export const GlobalProviders: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <UserProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        storageKey="contanos-theme"
      >
        <ModalProvider />
        <NotistackProvider>{children}</NotistackProvider>
      </ThemeProvider>
    </UserProvider>
  );
};
