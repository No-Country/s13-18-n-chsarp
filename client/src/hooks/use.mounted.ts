'use client';

import { useEffect, useState } from 'react';

interface UseMountedProps {
  valueToReturn: null | string;
}

export const useMounted = ({
  valueToReturn,
}: UseMountedProps): null | string | void => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return valueToReturn;
};
