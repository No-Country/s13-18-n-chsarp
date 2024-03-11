import { UserAvatar } from '@/components';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui';
import { useUserContext } from '@/hooks';
import { EditProfileDialog, LogoutDialog, UserHelpDialog } from './dialog';
import { UserInformation } from './user.information';

export const AvatarIcon = () => {
  const { user } = useUserContext((state) => state);
  return (
    <div className="max-h-[137px] max-w-[95px] pt-6 pb-4 border-white border-b-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar src={user?.user.profileImgUrl} />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          alignOffset={95}
          sideOffset={-73}
          className="
            w-min sm:w-[unset] md:ml-[2.5rem] ml-[3.1rem] md:mt-[0rem] font-medium flex items-start
            p-7 rounded-[1.5rem] text-white bg-[#5D8966] shadow-lg gap-3 md:w-[40vw] flex-col 
          "
        >
          <UserInformation />
          <EditProfileDialog />
          <UserHelpDialog />
          <LogoutDialog />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
