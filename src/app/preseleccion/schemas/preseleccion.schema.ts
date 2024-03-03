import z from 'zod';
/**
 * Esquema de preseleccion de usuario.
 */
export const preseleccionSchema = z.object({
  name: z
    .string({
      required_error: 'El nombre es requerido.',
      invalid_type_error: 'El nombre debe ser un texto.',
    })
    .min(3, { message: 'El nombre debe tener un mínimo de 3 carácteres.' }),
  lastname: z
    .string({
      required_error: 'El apellido es requerido.',
      invalid_type_error: 'El apellido debe ser un texto.',
    })
    .min(3, { message: 'El apellido debe tener un mínimo de 3 carácteres.' })
    .optional(),
  // file:
  //   typeof window === 'undefined'
  //     ? z.any()
  //     : z
  //         .instanceof(FileList)
  //         .optional()
  //         .refine(
  //           (file) => file?.length == 1,
  //           'La foto de perfil es requerida.'
  //         ),
  dateOfBirth: z.date({
    required_error: 'La fecha de nacimiento es requerida.',
  }),
  phone: z
    .string({
      required_error: 'El número de teléfono es requerido.',
    })
    .min(7, 'El número de teléfono debe tener un minimo de 7 carácteres.'),
  email: z
    .string({
      required_error: 'El email es requerido.',
      invalid_type_error: 'El email debe ser un texto',
    })
    .email(),
  country: z.string({ required_error: 'La nacionalidad es requerida.' }),
  gender: z.string({
    required_error: 'El Género es requerido.',
  }),
  optionOne: z.enum(['si', 'no'], {
    required_error: 'Debes seleccionar una opción.',
  }),
  optionTwo: z.enum(['si', 'no'], {
    required_error: 'Debes seleccionar una opción.',
  }),
  optionThree: z.enum(['si', 'no'], {
    required_error: 'Debes seleccionar una opción.',
  }),
  optionFour: z.enum(['si', 'no'], {
    required_error: 'Debes seleccionar una opción.',
  }),
});
