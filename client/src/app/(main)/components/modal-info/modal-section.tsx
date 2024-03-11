import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const ModalSection = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} flex flex-col py-2 px-4 gap-3 border-t-[1px] border-white w-full`}
    >
      {children}
    </div>
  );
};
