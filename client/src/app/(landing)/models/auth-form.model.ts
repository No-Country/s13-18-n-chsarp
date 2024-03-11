export enum AuthType {
  login = 'login',
  register = 'register',
}

export interface AuthTypeProps {
  authType: AuthType;
}
