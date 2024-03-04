import { Loader2 } from 'lucide-react';
import type { FC, ReactElement } from 'react';

import { AuthType, AuthTypeProps } from '@/app/(landing)/models';
import { Button } from '@/components/ui';
import { cn } from '@/lib';
import { AuthButtonsLayout } from '../../layout';
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
  const Loader = loading && <Loader2 className="animate-spin h-5 w-5 ml-1.5" />;

  const isRegister = authType === AuthType.register;
  const authText = (registerType: boolean) =>
    registerType ? 'Crea tu cuenta' : 'Inicia sesión';

  return (
    <>
      <AuthButtonsLayout authType={authType}>
        <Button
          className={cn(
            'bg-[#5D8966] text-white rounded-full hover:bg-[#22612F] max-w-max scale-125',
            !isRegister && 'left-[50%] -translate-x-2/4 relative px-[2rem]'
          )}
          type="submit"
          disabled={!isValid}
        >
          {authText(isRegister)}
          {Loader}
        </Button>
        {authType === AuthType.register && (
          <Button
            className="
              bg-[#0F7D7C] text-white rounded-full hover:bg-[#036C6B]
              max-w-max scale-125
            "
            disabled={!isValid}
          >
            Sé mentor/ra
            {Loader}
          </Button>
        )}
      </AuthButtonsLayout>
      {authType === AuthType.login ? (
        <p
          className="
                p-0 underline underline-offset-2 hover:no-underline
                transition-colors hover:text-[#5D8966] cursor-pointer
                text-center
              "
        >
          ¿No recuerdas tu contraseña?
        </p>
      ) : (
        <AccountParagraph authType={authType} />
      )}
    </>
  );
};
