'use client';

import { Chat } from '@/components';

const page = ({ params }: any) => {
  return <Chat id={params.chatId} />;
};

export default page;
