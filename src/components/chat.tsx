'use client';

import { ModalInfo } from '@/app/(main)/components';
import { MediaRoom } from '@/app/(main)/components/media.room';
import { useFetchAndLoad, useModalInfo, useUserContext } from '@/hooks';
import { Axios } from '@/lib';
import { AppRoutes, AxiosCall, Session } from '@/models';
import { loadAbort } from '@/utils';
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from '@microsoft/signalr';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChatHeader } from './chat-header';
import { ChatInput } from './chat-input';
import { MessageList } from './message-list';
import { Separator } from './ui';

// chat-api.model
const SESSIONS_BASE_PATH = '/Sessions';

// model
export interface Message {
  userName: string;
  text: string;
}
export interface ChatProps {
  id: string;
}
export interface useChatProps extends ChatProps {}

export interface useSessionProps {
  sessionFn: (params: any) => AxiosCall<Session>;
  setMessages: (messages: Message[]) => void;
  setChatRoomName: (name: string) => void;
  setChatModeratorId: (id: string) => void;
  setChatModeratorName: (name: string) => void;
}

// chat.service.ts
export const getSession = (params: any): AxiosCall<Session> => {
  const url = SESSIONS_BASE_PATH + params;
  const Controller = loadAbort();

  return {
    call: Axios.get(url),
    controller: Controller,
  };
};

// use.session.ts
export const useSession = ({
  sessionFn,
  setMessages,
  setChatRoomName,
  setChatModeratorId,
  setChatModeratorName,
}: useSessionProps) => {
  const [sessionIsNull, setSessionIsNull] = useState(false);
  const { loading, callEndpoint } = useFetchAndLoad();

  const handleGetSessionMessages = useCallback(
    async (param: any): Promise<void> => {
      const response = await callEndpoint(sessionFn(param));
      if (response?.data) {
        console.log(response?.data);
        setMessages(response.data.messages);
        setChatRoomName(response.data.name);
        setChatModeratorId(response.data.moderatorId);
        setChatModeratorName(response.data.moderatorName);
      } else {
        setSessionIsNull(true);
      }
    },
    [callEndpoint, sessionFn]
  );

  return { loading, handleGetSessionMessages, sessionIsNull };
};

// use.chat.ts
export const useChat = ({ id }: useChatProps) => {
  const router = useRouter();
  const { user } = useUserContext((store) => store);

  const options = {
    accessTokenFactory: () => {
      return user?.token as string;
    },
  };

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatRoomName, setChatRoomName] = useState('');
  const [chatModeratorId, setChatModeratorId] = useState('');
  const [chatModeratorName, setChatModeratorName] = useState('');
  const [messagesAreLoading, setMessagesAreLoading] = useState(true);
  const [chatIsLoading, setChatIsLoading] = useState(true);
  const [chatIsClosing, setChatIsClosing] = useState(false);

  const { handleGetSessionMessages, sessionIsNull } = useSession({
    sessionFn: getSession,
    setMessages,
    setChatRoomName,
    setChatModeratorId,
    setChatModeratorName,
  });

  useEffect(() => {
    (async () => {
      await handleGetSessionMessages('/' + id);

      setMessagesAreLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!messagesAreLoading && !connection && !chatIsClosing) {
      if (!sessionIsNull) {
        (async () => {
          const newConnection = new HubConnectionBuilder()
            .withUrl('https://s13.runasp.net/chat', options)
            .configureLogging(LogLevel.Information)
            .build();

          newConnection.on('JoinSpecificChatRoom', (userName, msg) => {
            setMessages((messages) => [...messages, { userName, text: msg }]);
          });

          newConnection.on('ReceiveSpecificMessage', (userName, msg) => {
            setMessages((messages) => [...messages, { userName, text: msg }]);
          });

          newConnection.on('CloseChat', () => {
            setChatIsClosing(true);
          });

          await newConnection.start();
          await newConnection.invoke('JoinSpecificChatRoom', {
            // TODO: arreglar esto
            userName: user?.user.name,
            sessionId: +id,
            chatRoom: chatRoomName,
          });

          setConnection(newConnection);
          setChatIsLoading(false);
        })();
      } else {
        router.push(AppRoutes.CHANNEL);
      }
    }

    return () => {
      if (connection && !chatIsClosing) {
        connection.invoke('LeaveChatRoom', {
          userName: user?.user.name,
          sessionId: +id,
          chatRoom: chatRoomName,
        });
      }
    };
  }, [messagesAreLoading, connection]);

  useEffect(() => {
    if (chatIsClosing) {
      setTimeout(() => {
        router.push(AppRoutes.CHANNEL);
      }, 2000);
    }
  }, [chatIsClosing]);

  useEffect(() => {
    if (messagesContainerRef.current && !chatIsLoading) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages, chatIsLoading]);

  return {
    connection,
    messages,
    chatIsLoading,
    setConnection,
    messagesContainerRef,
    chatRoomName,
    chatModeratorId,
    chatModeratorName,
    chatIsClosing,
  };
};

// TODO: agregar estas funciones
// const LeaveChatRoom = async (userName, chatRoom, sessionId) => {
//   try {
//     if (connection != null)
//       await connection.invoke('LeaveChatRoom', {
//         userName,
//         sessionId,
//         chatRoom,
//       });
//     setConnection(null);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const Chat = ({ id }: ChatProps) => {
  const {
    connection,
    messages,
    chatIsLoading,
    setConnection,
    messagesContainerRef,
    chatRoomName,
    chatModeratorId,
    chatModeratorName,
    chatIsClosing,
  } = useChat({
    id,
  });
  const searchParams = useSearchParams();

  // En dado caso que de error el isVideo por crear la respuesta en booleano, cambiar la validación 1.1
  const isVideo: boolean = new Boolean(searchParams.get('video')).valueOf();

  const { isModalOpen, openModalInfo, closeModal } = useModalInfo();

  return (
    <div className="flex flex-col h-full relative">
      <ModalInfo
        isOpen={isModalOpen}
        onClose={closeModal}
        connection={connection}
        sessionId={id}
        chatRoomName={chatRoomName}
        chatModeratorId={chatModeratorId}
        chatModeratorName={chatModeratorName}
      />
      {chatIsLoading && (
        <div className="h-full flex justify-center items-center">
          Loading...
        </div>
      )}

      {!chatIsLoading && (
        <>
          <ChatHeader openModalInfo={openModalInfo} />
          <Separator />
          {isVideo && (
            <MediaRoom
              chatId={id}
              video={isVideo}
              audio={true}
              params={{ channelId: id }}
            />
          )}
          {!isVideo && (
            <>
              <div
                ref={messagesContainerRef}
                className="overflow-y-auto mx-1 flex-1"
              >
                <MessageList messages={messages} />
              </div>
              <Separator />
              <div className="mt-auto min-h-[62px] flex items-center">
                <ChatInput
                  connection={connection}
                  setConnection={setConnection}
                  chatIsClosing={chatIsClosing}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
