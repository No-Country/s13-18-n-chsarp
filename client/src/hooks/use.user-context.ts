import { useContext } from 'react';
import { useStore } from 'zustand';

import { UserContext } from '@/context';
import type { UserState, UserStore } from '@/models';

export const useUserContext = <T>(selector: (store: UserStore) => T): T => {
  const UserStoreContext = useContext(UserContext);

  if (!UserStoreContext) {
    throw new Error(
      'No se puede utilizar el contexto de usuario sin inicializarse antes.'
    );
  }

  return useStore(UserStoreContext, selector);
};
