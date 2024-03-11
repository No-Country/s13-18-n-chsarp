'Use client';

import { createStore } from 'zustand/vanilla';

import { StoresNames, UserState, UserStore } from '@/models';
import { persist } from 'zustand/middleware';

const getUser =
  // eslint-disable-next-line no-undef
  globalThis?.localStorage && localStorage.getItem(StoresNames.user);

export const initUserStore = (): UserState => ({
  user: getUser && JSON.parse(getUser),
});

export const defaultInitState: UserState = {
  user: null,
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()(
    persist(
      (set) => ({
        ...initState,
        setUser: (user) => set({ user }),
        emptyUser: () => set({ user: null }),
      }),
      { name: StoresNames.user }
    )
  );
};
