'use client';
import { FC, ReactElement } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui';

interface IDialog {
  title: string;
  description: string;
  childrenTrigger: ReactElement;
  childrenContent: ReactElement;
}

export const Modal: FC<IDialog> = ({
  title,
  description,
  childrenTrigger,
  childrenContent
}): ReactElement => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        {childrenTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#5D8966]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">{childrenContent}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
