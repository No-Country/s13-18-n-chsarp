import Link from 'next/link';

import { buttonVariants } from '@/components/ui';
import { cn } from '@/lib';
import { ModeToggle } from './mode-toggle';

interface Props {
  handleClose: () => void;
}

export const NavModal = ({ handleClose }: Props) => {
  return (
    <div className="py-3 px-6 mt-auto">
      <div className="flex flex-col gap-y-4">
        <ul className="flex flex-col gap-y-4">
          <li>
            <Link
              onClick={handleClose}
              href="/sign-in"
              className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}
            >
              Ingreso
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClose}
              href="/sign-up"
              className={cn(buttonVariants(), 'w-full')}
            >
              Registro
            </Link>
          </li>
        </ul>
        <div className="self-end">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
