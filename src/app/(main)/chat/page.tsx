import { MoveLeft } from 'lucide-react';

const page = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex gap-3 items-center">
        <MoveLeft />
        <p>Elige un chat para comenzar a chatear!</p>
      </div>
    </div>
  );
};

export default page;
