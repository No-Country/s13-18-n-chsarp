import { UserLogged } from '@/models';

// Adatptador para moldear la información al crear un nuevo usuario en la aplicación.
export const createUserAdapter = (data: any): UserLogged => ({
  token: data.jwt,
  user: {
    id: data.user.id,
    name: data.user.name,
    email: data.email,
    //description: data.user.description,
    dateOfBirth: data.user.dateOfBirth,
    gender: data.user.gender,
    profileImgUrl: data.user?.urlProfileImage,
  },
  onboarded: data.onboarded,
  role: data.role,
});
