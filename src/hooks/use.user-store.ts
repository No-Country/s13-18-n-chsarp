import { create, type StateCreator } from 'zustand';

import { UserLogged } from '@/models';

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

export const useUserStore = create<UserState>()(userStore);
