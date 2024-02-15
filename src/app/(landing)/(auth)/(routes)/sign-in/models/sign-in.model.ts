import z from 'zod';

import { signInSchema } from '../schemas';

/**
 * Modelo del esquema de autenticación de usuario.
 */
export type SignInSchema = z.infer<typeof signInSchema>;

/**
 * Valores por defecto del formulario de autenticación.
 */
export const signUpDefaultValues = {
  email: '',
  password: '',
};
