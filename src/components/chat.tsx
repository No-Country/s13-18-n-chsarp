'use client';

import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from '@microsoft/signalr';
import { useEffect, useState } from 'react';
import { ChatHeader } from './chat-header';
import { ChatInput } from './chat-input';
import { MessageList } from './message-list';

interface Message {
  userName: string;
  msg: string;
}

export const Chat = () => {
  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesAreLoading, setMessagesAreLoading] = useState(true);
  const [chatIsLoading, setChatIsLoading] = useState(true);

  useEffect(() => {}, []);

  useEffect(() => {
    if (!messagesAreLoading) {
      (async () => {
        const newConnection = new HubConnectionBuilder()
          .withUrl('https://s13.runasp.net/chat')
          .configureLogging(LogLevel.Information)
          .build();

        newConnection.on('JoinSpecificChatRoom', (userName, msg) => {
          setMessages((messages) => [...messages, { userName, msg }]);
        });

        newConnection.on('ReceiveSpecificMessage', (userName, msg) => {
          setMessages((messages) => [...messages, { userName, msg }]);
        });

        //  newConnection.start().then(() => setConnection(newConnection));
        // await newConnection.invoke('JoinSpecificChatRoom', {
        //   userName: 'moderadorr@app.com',
        //   sessionId: 4,
        //   chatRoom: 'Pruebita',
        // });

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

  // useEffect(() => {
  //   if (connection)
  //     connection.invoke('JoinSpecificChatRoom', {
  //       userName: 'moderadorr@app.com',
  //       sessionId: 4,
  //       chatRoom: 'Pruebita',
  //     });
  // }, [connection]);

  console.log(messages);

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
          <div className="overflow-y-auto">
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
