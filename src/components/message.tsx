import { cn } from '@/lib';

interface Props {
  prevUser: string | null;
  user: string;
  content: string;
  id: string;
}

export const Message = ({ prevUser, user, content, id }: Props) => {
  const isLoggedUser = '1' === user;
  const isSameAsPreviousUser = user === prevUser;

  return (
    <div
      className={cn(
        'bg-[#ebf3f9] px-3 py-2 rounded-xl flex flex-col self-start max-w-[400px] text-black',
        isLoggedUser && 'self-end',
        !isSameAsPreviousUser && 'mt-2',
        isLoggedUser && !isSameAsPreviousUser && 'rounded-tr-none',
        !isLoggedUser && !isSameAsPreviousUser && 'rounded-tl-none'
      )}
    >
      {!isSameAsPreviousUser && !isLoggedUser && (
        <p className="font-medium">User {user}</p>
      )}
      <p>{content}</p>
    </div>
  );
};
