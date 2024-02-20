import { useModal, useUserStore } from '@/hooks';
import { createUserAdapter } from '../adapters';

export const useUserActions = () => {
  const { onClose } = useModal();
  const { setUser, emptyUser } = useUserStore();

  const saveUser = (data: any) => {
    const user = createUserAdapter(data);
    setUser(user);
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
