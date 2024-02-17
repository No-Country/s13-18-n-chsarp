// Modelo del usuario.
export interface User {
  name: string;
  email?: string;
  description?: string;
  profileImgUrl?: string;
  dateOfBirth?: string;
  gender: string;
}

// Modelo de un usuario autenticado.
export interface UserLogged {
  token: string;
  user: User;
}
