import z from 'zod';

import { AuthErrorsModel, Gender } from '../models';

/**
 * Esquema del registro de usuario.
 */
export const signUpSchema = z.object({
  name: z
    .string({
      required_error: AuthErrorsModel.NAME_REQUIRED,
      invalid_type_error: AuthErrorsModel.INVALID_NAME,
    })
    .min(2, {
      message: AuthErrorsModel.NAME_MIN_LENGTH,
    }),
  email: z
    .string({
      required_error: AuthErrorsModel.EMAIL_REQUIRED,
      invalid_type_error: AuthErrorsModel.INVALID_TYPE_EMAIL,
    })
    .email({ message: AuthErrorsModel.INVALID_EMAIL }),
  password: z
    .string({
      required_error: AuthErrorsModel.PASS_REQUIRED,
      invalid_type_error: AuthErrorsModel.INVALID_PASS,
    })
    .min(8, { message: AuthErrorsModel.PASS_MIN_LENGTH }),
  dateOfBirth: z.date({
    required_error: AuthErrorsModel.DOB_REQUIRED,
    invalid_type_error: AuthErrorsModel.INVALID_TYPE_DOB,
  }),
  gender: z.nativeEnum(Gender, {
    required_error: AuthErrorsModel.GENDRE_REQUIRED,
    invalid_type_error: AuthErrorsModel.INVALID_GENDRE,
  }),
});
