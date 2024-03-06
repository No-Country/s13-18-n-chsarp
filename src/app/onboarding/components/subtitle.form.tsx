import React, { FC, ReactElement } from 'react';

interface SubtitleFormProps {
  subtitle: string;
}

export const SubtitleForm: FC<SubtitleFormProps> = ({
  subtitle,
}): ReactElement => {
  return <p className="font-medium text-3xl md:text-3xl -ml-5">{subtitle}</p>;
};
