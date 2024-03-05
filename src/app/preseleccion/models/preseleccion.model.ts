import z from 'zod';

import { preseleccionSchema } from '../schemas';

/**
 * Modelo del esquema de preseleccion de usuario.
 */
export type PreseleccionSchema = z.infer<typeof preseleccionSchema>;

/**
 * Valores por defecto del formulario de preseleccion.
 */
enum Options {
  SI = 'si',
  NO = 'no',
}

export const preseleccionDefaultValues = {
  name: '',
  lastname: '',
  // file: '',
  phone: '',
  email: '',
  nationality: '',
  gender: '',
  optionOne: Options.NO,
  optionTwo: Options.NO,
  optionThree: Options.NO,
  optionFour: Options.NO,
};
