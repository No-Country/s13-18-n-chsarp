import z from 'zod';

import { preseleccionSchema } from '../schemas';

/**
 * Modelo del esquema de preseleccion de usuario.
 */
export type PreseleccionSchema = z.infer<typeof preseleccionSchema>;

/**
 * Valores por defecto del formulario de preseleccion.
 */

enum Gender {
  PREFER_NOT_TO_SAY = 'I prefer not to say',
  MALE = 'male',
  FEMALE = 'female',
}
enum Options {
  SI = 'si',
  NO = 'no',
}

export const preseleccionDefaultValues = {
  name: '',
  lastname: '',
  picture: '',
  phone: '',
  email: '',
  nationality: '',
  gender: Gender.PREFER_NOT_TO_SAY,
  optionOne: Options.NO,
  optionTwo: Options.NO,
  optionThree: Options.NO,
  optionFour: Options.NO,
};
