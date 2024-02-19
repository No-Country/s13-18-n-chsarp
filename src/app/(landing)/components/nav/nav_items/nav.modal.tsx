import { NavProps } from '@/app/(landing)/models';
import { ModeToggle } from '@/components';
import { NavButtons } from './nav.buttons';

export const NavModal = ({ handleClose }: NavProps) => {
  return (
    <div className="py-3 px-6 mt-auto">
      <div className="flex flex-col gap-y-4">
        <NavButtons mobile={true} handleClose={handleClose} />
        <div className="self-end">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
