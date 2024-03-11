import { Menu } from 'lucide-react';
import type { FC, ReactElement } from 'react';

import {
  Button,
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui';
import { Sidebar } from './sidebar';

export const MobileToggle: FC = (): ReactElement => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="bg-[#5D8966]" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0 flex gap-0 bg-transparent border-none"
      >
        <div className="w-[6rem]">
          <Sidebar />
        </div>
      </SheetContent>
    </Sheet>
  );
};
