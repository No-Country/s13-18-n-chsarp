'use client';

import {
  useRef,
  type FC,
  type PropsWithChildren,
  type ReactElement,
} from 'react';
import { StoreApi } from 'zustand';

import { UserContext } from '@/context';
import { UserStore } from '@/models';
import { createUserStore, initUserStore } from '@/stores';

export const UserProvider: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  const userRef = useRef<StoreApi<UserStore>>();

  if (!userRef.current) {
    userRef.current = createUserStore(initUserStore());
  }

  return (
    <UserContext.Provider value={userRef.current}>
      {children}
    </UserContext.Provider>
  );
};
