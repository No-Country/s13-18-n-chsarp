import { Loader2 } from 'lucide-react';
import type { FC, ReactElement } from 'react';

const Loader: FC = (): ReactElement => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <Loader2 className="animate-spin transition w-8 h-8" />
    </div>
  );
};

export default Loader;
