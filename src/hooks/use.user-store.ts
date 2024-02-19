import { create, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { StoresNames, UserLogged } from '@/models';

interface UserState {
  user: UserLogged | null;
  setUser: (user: UserLogged) => void;
  clearUser: () => void;
}

const userStore: StateCreator<UserState> = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
});

export const useUserStore = create<UserState>()(
  devtools(persist(userStore, { name: StoresNames.user }))
);
