import React, { FC, PropsWithChildren, ReactElement } from 'react';

export const ContainerFormPreseleccion: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <div className="bg-[#FFFDF9] dark:bg-[#FFFDF9] py-20 h-full mx-auto min-h-screen">
      <div
        className="bg-contain bg-start bg-no-repeat h-full flex justify-center"
        style={{ backgroundImage: 'url(./images/leaves-background.png)' }}
      >
        <div className="w-4/5	h-4/5	mx-auto rounded-2xl mt-16 md:mt-24 shadow-[0_4px_28px_0_rgba(0,0,0,0.25)]">
          {children}
        </div>
      </div>
    </div>
  );
};
