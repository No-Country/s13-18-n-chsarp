import type { FC, JSX } from 'react';

/**
 * Modelo del label para el action tooltip.
 */
interface ActionTooltipLabelProps {
  label: string;
}

/**
 * Componente del Action tooltip label.
 *
 * @param { ActionTooltipLabelProps } param0
 *  - Props del componente action tooltip label.
 *
 * @returns { JSX.Element } Componente del Action tooltip label.
 */
export const ActionTooltipLabel: FC<ActionTooltipLabelProps> = ({
  label,
}: ActionTooltipLabelProps): JSX.Element => {
  return (
    <p className="font-semibold text-sm capitalize">
      {label.toLocaleLowerCase()}
    </p>
  );
};
