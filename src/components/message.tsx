import { useUserContext } from '@/hooks';
import { cn } from '@/lib';

interface Props {
  prevUser: string | null;
  userName: string;
  text: string;
}

export const Message = ({ prevUser, userName, text }: Props) => {
  const { user } = useUserContext((store) => store);
  const isLoggedUser = user?.user.name === userName;
  const isSameAsPreviousUser = userName === prevUser;

  if (userName === 'ADMIN') {
    return (
      <div className="bg-[#ebf3f9] px-3 py-2 rounded-xl flex flex-col max-w-[400px] text-black self-center">
        <p>{text}</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'bg-[#325544] px-3 py-2 rounded-xl flex flex-col self-start max-w-[400px] text-white',
        isLoggedUser && 'bg-[#227f77] self-end',
        !isSameAsPreviousUser && 'mt-2',
        isLoggedUser && !isSameAsPreviousUser && 'rounded-tr-none',
        !isLoggedUser && !isSameAsPreviousUser && 'rounded-tl-none'
      )}
    >
      {!isSameAsPreviousUser && !isLoggedUser && (
        <p className="font-bold">{userName}</p>
      )}
      <p>{text}</p>
    </div>
  );
};
