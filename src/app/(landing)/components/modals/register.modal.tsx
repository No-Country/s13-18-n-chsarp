import type { FC, ReactElement } from 'react';

import { ModalTypeKeys } from '@/models';
import { AuthModalLayout } from '../layout';

export const RegisterModal: FC = (): ReactElement => {
  return <AuthModalLayout modalType={ModalTypeKeys.REGISTER} />;
};
