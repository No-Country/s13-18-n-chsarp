import type { TypeWithKey } from '@/models';

export const getValidationError = (errorMessage: string): string => {
  const codeMatcher: TypeWithKey<string> = { 
    'The Dni field is required.': 'El DNI es requerido.' 
  };

  return codeMatcher[errorMessage];
};
