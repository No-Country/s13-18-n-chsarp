import { Loader2 } from 'lucide-react';
import type { FC, ReactElement } from 'react';

import { Button } from '@/components/ui';
import { AuthType, AuthTypeProps } from '../models';
import { AccountParagraph } from './account.paragraph';

interface AuthFooterProps extends AuthTypeProps {
  loading: boolean;
  isValid: boolean;
}

export const AuthFooter: FC<AuthFooterProps> = ({
  loading,
  isValid,
  authType,
}: AuthFooterProps): ReactElement => {
  const isRegister = authType === AuthType.register;
  const authText = (registerType: boolean) =>
    registerType ? 'Crea tu cuenta' : 'Inicia sesión';

  return (
    <>
      <Button
        className="
            bg-[#5D8966] text-white rounded-full hover:bg-[#22612F]
            max-w-max
          "
        type="submit"
        disabled={!isValid}
      >
        {authText(isRegister)}
        {loading && <Loader2 className="animate-spin h-5 w-5 ml-1.5" />}
      </Button>
      <AccountParagraph authType={authType} />
    </>
  );
};
