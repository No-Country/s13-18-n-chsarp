import {} from '@/components/ui';
import { AvatarIcon } from '.';
import { Channels } from './channels';

export const Sidebar = () => {
  return (
    <aside className="flex flex-col h-full w-[6rem] z-30 flex-col fixed inset-y-0 py-2">
      <div className="flex flex-col gap-5 items-center h-full bg-[#5D8966] rounded-[2rem]">
        <AvatarIcon />
        {/* <AddForm /> */}
        <Channels />
      </div>
    </aside>
  );
};
