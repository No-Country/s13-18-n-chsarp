/**
 * Tipos de modal enum.
 */
export enum ModalType {
  LOGIN = 'login',
  REGISTER = 'register',
  CREATE_CHANNEL = 'createChannel',
  DELETE_CHANNEL = 'deleteChannel',
  EDIT_CHANNEL = 'editChannel',
  INVITE = 'invite',
  EDIT_USER = 'editUser',
}

/**
 * Modelo para los tipos de modal.
 */
export interface ModalTypeProps {
  modalType: keyof typeof ModalType;
}

/**
 * Modelo de las llaves de los tipos de modal.
 */
export enum ModalTypeKeys {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  CREATE_CHANNEL = 'CREATE_CHANNEL',
  DELETE_CHANNEL = 'DELETE_CHANNEL',
  EDIT_CHANNEL = 'EDIT_CHANNEL',
  INVITE = 'INVITE',
  EDIT_USER = 'EDIT_USER',
}
