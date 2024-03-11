'use client';

import type { FC } from 'react';
import { useSnackbar, type ProviderContext, type VariantType } from 'notistack';

let useSnackbarRef: ProviderContext;

export const SnackbarConfig: FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const SnackbarManager = {
  toast(message: string, variant: VariantType = 'default') {
    useSnackbarRef.enqueueSnackbar(message, { variant });
  },
  success(message: string) {
    this.toast(message, 'success');
  },
  error(message: string) {
    this.toast(message, 'error');
  },
  info(message: string) {
    this.toast(message, 'info');
  },
  warning(message: string) {
    this.toast(message, 'warning');
  },
};
