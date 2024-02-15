import type { FC, PropsWithChildren, ReactElement } from 'react';

import { FormLayout } from '@/components';

const AuthLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  return <FormLayout uniqueForm>{children}</FormLayout>;
};

export default AuthLayout;
