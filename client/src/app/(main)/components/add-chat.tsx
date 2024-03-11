import { Button } from '@/components/ui';
import Image from 'next/image';

export const AddChat = () => {
  return (
    <Button variant={'link'}>
      <Image
        src="/images/add-chat.png"
        alt="group hug"
        width={30}
        height={30}
      />
    </Button>
  );
};
