import { cn } from '@/lib';

interface Props {
  prevUser: string | null;
  userName: string;
  msg: string;
}

export const Message = ({ prevUser, userName, msg }: Props) => {
  const isLoggedUser = 'moderadorr@app.com' === userName;
  const isSameAsPreviousUser = userName === prevUser;

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
        <p className="font-medium">{userName}</p>
      )}
      <p>{msg}</p>
    </div>
  );
};
