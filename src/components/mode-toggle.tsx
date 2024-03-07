'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dark, Light } from '@/app/(landing)/components/icons';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="border-none hover:bg-transparent bg-transparent p-0"
          variant="outline"
        >
          <Light
            width={24}
            height={24}
            className="fill-[#0F7D7C] stroke-[#0F7D7C] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Dark
            width={24}
            height={24}
            className="fill-[#0F7D7C] stroke-[#0F7D7C] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" hideWhenDetached={true}>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        {/* <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
