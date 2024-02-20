'use client';

import { useRouter } from 'next/navigation';

import { AppRoutes } from '@/models';
import { useModal, useUserStore } from '@/hooks';
import { createUserAdapter } from '../adapters';

export const useUserActions = () => {
  const router = useRouter();
  const { onClose } = useModal();
  const { setUser, emptyUser } = useUserStore();

  const saveUser = (data: any) => {
    const user = createUserAdapter(data);
    setUser(user);
    router.push(AppRoutes.CHAT);
    onClose();
  };

  const clearUser = () => {
    emptyUser();
  };

  return {
    saveUser,
    clearUser,
  };
};
