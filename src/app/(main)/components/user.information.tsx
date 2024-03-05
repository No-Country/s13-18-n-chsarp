import type { FC, ReactElement } from 'react';

import { UserAvatar } from '@/components';
import { useUserContext } from '@/hooks';

export const UserInformation: FC = (): ReactElement => {
  const { user } = useUserContext((store) => store);

  return (
    <div className="flex w-full">
      <div className="flex flex-col items-start md:flex-row md:items-center gap-3">
        <UserAvatar src={user?.user.profileImgUrl} />
        <div>
          <p className="text-sm lg:text-lg font-semibold">{user?.user.name}</p>
          <p className="text-xs lg:text-base font-light">{user?.user.email}</p>
        </div>
      </div>
    </div>
  );
};
