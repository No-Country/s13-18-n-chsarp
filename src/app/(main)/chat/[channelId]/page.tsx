'use client';

import { Chat } from '@/components';

const page = ({ params }: any) => {
  return <Chat id={params.id} />;
};

export default page;
