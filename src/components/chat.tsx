'use client';

import { useFetchAndLoad } from '@/hooks';
import { Axios } from '@/lib';
import { AxiosCall, Session } from '@/models';
import { loadAbort } from '@/utils';
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from '@microsoft/signalr';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChatHeader } from './chat-header';
import { ChatInput } from './chat-input';
import { MessageList } from './message-list';

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
export const useSession = ({ sessionFn, setMessages }: useSessionProps) => {
  const { loading, callEndpoint } = useFetchAndLoad();

  const handleGetSessionMessages = useCallback(
    async (param: any): Promise<void> => {
      const response = await callEndpoint(sessionFn(param));
      if (response.data) setMessages(response.data.messages);
    },
    [callEndpoint, sessionFn]
  );

  return { loading, handleGetSessionMessages };
};

// use.chat.ts
export const useChat = ({ id }: useChatProps) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesAreLoading, setMessagesAreLoading] = useState(true);
  const [chatIsLoading, setChatIsLoading] = useState(true);

  const { handleGetSessionMessages } = useSession({
    sessionFn: getSession,
    setMessages,
  });

  useEffect(() => {
    (async () => {
      await handleGetSessionMessages('/' + id);

      setMessagesAreLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!messagesAreLoading) {
      (async () => {
        const newConnection = new HubConnectionBuilder()
          .withUrl('https://s13.runasp.net/chat')
          .configureLogging(LogLevel.Information)
          .build();

        newConnection.on('JoinSpecificChatRoom', (userName, msg) => {
          setMessages((messages) => [...messages, { userName, text: msg }]);
        });

        newConnection.on('ReceiveSpecificMessage', (userName, msg) => {
          setMessages((messages) => [...messages, { userName, text: msg }]);
        });

        await newConnection.start();
        await newConnection.invoke('JoinSpecificChatRoom', {
          userName: 'moderadorr@app.com',
          sessionId: 4,
          chatRoom: 'Pruebita',
        });

        setConnection(newConnection);
        setChatIsLoading(false);
      })();
    }
  }, [messagesAreLoading]);

  useEffect(() => {
    // Scroll to the bottom of the container when messages change
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
  };
};

export const Chat = ({ id }: ChatProps) => {
  const {
    connection,
    messages,
    chatIsLoading,
    setConnection,
    messagesContainerRef,
  } = useChat({
    id,
  });

  return (
    <div className="flex flex-col h-full">
      <ChatHeader />
      {chatIsLoading && (
        <div className="h-full flex justify-center items-center">
          Loading...
        </div>
      )}
      {!chatIsLoading && (
        <>
          <div ref={messagesContainerRef} className="overflow-y-auto">
            <MessageList messages={messages} />
          </div>
          <div className="mt-auto min-h-[62px] flex items-center">
            <ChatInput connection={connection} setConnection={setConnection} />
          </div>
        </>
      )}
    </div>
  );
};
