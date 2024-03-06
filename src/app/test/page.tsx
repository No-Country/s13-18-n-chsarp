'use client';

import type { FC, ReactElement } from 'react';
import { Channels } from '../(main)/components/channels';

const PageTest: FC = (): ReactElement => {
  return (
    // <>
    //   <Modal
    //     title="Editar datos de usuario"
    //     description="Edita tu información de usuario aquí. No olvides guardar los cambios cuando hayas culminado."
    //   >
    //     <UserEditForm />
    //   </Modal>
    //   <Modal title="Crear canal" description="Ingresa los datos pedidos.">
    //     <NewChannelForm />
    //   </Modal>
    //   <ChatInput />
    //   <TestModalButton />
    // </>
    <Channels />
  );
};

export default PageTest;
