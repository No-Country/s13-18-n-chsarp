import { redirect } from 'next/navigation';

import { createUserAdapter } from '@/app/(landing)/adapters';
import { useModal, useUserContext } from '@/hooks';
import { AppRoutes, StoresNames } from '@/models';

export const useUserActions = () => {
  const { onClose } = useModal();
  const { setUser, emptyUser } = useUserContext((store) => store);

  const saveUser = (data: any) => {
    const user = createUserAdapter(data);
    setUser(user);
    onClose();
  };

  const saveMentor = (data: any) => {
    const user = createUserAdapter(data);
    setUser(user);
  };

  const clearUser = () => {
    emptyUser();
    localStorage.removeItem(StoresNames.user);
    redirect(AppRoutes.HOME);
  };

  return {
    saveUser,
    clearUser,
    saveMentor,
  };
};
