import { ChatInput, Modal, NewChannelForm, UserEditForm } from '@/components';
import type { FC, ReactElement } from 'react';

const PageTest: FC = (): ReactElement => {
  return <>
    <Modal title='Editar datos de usuario' description='Edita tu información de usuario aquí. No olvides guardar los cambios cuando hayas culminado.'>
      <UserEditForm />
    </Modal>
    <Modal title='Crear canal' description='Ingresa los datos pedidos.'>
      <NewChannelForm />
    </Modal>
    <ChatInput />
  </>
};

export default PageTest;
