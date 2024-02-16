import type { FC, ReactElement } from 'react';

import { useMounted } from '@/hooks';

export const ModalProvider: FC = (): ReactElement | null => {
  useMounted({ valueToReturn: null });

  return <></>;
};
