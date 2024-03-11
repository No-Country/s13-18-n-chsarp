import { NavProps } from '@/app/(landing)/models';
import { NavButtons } from './nav.buttons';

export const NavModal = ({ handleClose }: NavProps) => {
  return (
    <div className="pt-3 pb-6 px-6 mt-auto">
      <div className="flex flex-col gap-y-4">
        <NavButtons mobile={true} handleClose={handleClose} />
      </div>
    </div>
  );
};
