import { create } from 'zustand';

interface UserStore {
  user: object | null;
  setUser: (user: any) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: {} }),
}));
