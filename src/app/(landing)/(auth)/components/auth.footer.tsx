import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import type { FC, ReactElement } from 'react';

import { Button } from '@/components/ui';
import { AppRoutes } from '@/models';
import { AuthType } from '../models';

interface AuthFooterProps {
  loading: boolean;
  isValid: boolean;
  authType: AuthType;
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
      <p>
        ¿{isRegister ? 'Ya' : 'No'} tienes una cuenta?{' '}
        <Link
          className="underline hover:text-[#5D8966] transition-colors"
          href={isRegister ? AppRoutes.SIGN_IN : AppRoutes.SIGN_UP}
        >
          {authText(!isRegister)}
        </Link>
      </p>
    </>
  );
};
