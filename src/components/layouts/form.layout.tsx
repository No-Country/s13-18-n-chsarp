import type { FC, PropsWithChildren, ReactElement } from 'react';

import { cn } from '@/lib';

interface FormLayoutProps extends PropsWithChildren {
  uniqueForm?: boolean;
}

export const FormLayout: FC<FormLayoutProps> = ({
  children,
  uniqueForm,
}: FormLayoutProps): ReactElement => {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        uniqueForm && 'min-h-screen'
      )}
    >
      <section
        className="
            w-full max-w-[30rem] md:w-[30rem] m-2 my-10 md:m-10 p-10 border
            dark:border-white border-black rounded-md
        "
      >
        {children}
      </section>
    </div>
  );
};
