'use client';

import type { FC, PropsWithChildren, ReactElement } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui';
import { ActionTooltipLabel } from './action-tooltip.label';

/**
 * Modelo del componente action tooltip.
 */
interface ActionTooltipProps extends PropsWithChildren {
  label: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
}

/**
 * Componente Action tooltip.
 *
 * @param { ActionTooltipProps } param0 - Props del componente Action tooltip.
 *
 * @returns { JSX.Element } Componente Action tooltip.
 */
export const ActionTooltip: FC<ActionTooltipProps> = ({
  label,
  children,
  side,
  align,
}: ActionTooltipProps): ReactElement => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <ActionTooltipLabel label={label} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
