'use client';
import { HubConnection } from '@microsoft/signalr';
import { SendHorizonalIcon } from 'lucide-react';
import { useState } from 'react';
import { Button, Input } from './ui';

interface ChatInputProps {
  connection: HubConnection | null;
  setConnection: (newConnection: HubConnection | null) => void;
}

export function ChatInput({ connection, setConnection }: ChatInputProps) {
  const [inputMessage, setInputMessage] = useState('');
  const sendMessage = async () => {
    if (inputMessage.length > 0) {
      try {
        if (connection) {
          let result = await connection.invoke('SendMessage', inputMessage);
          if (result === 'Disconnected') {
            setConnection(null);
          } else {
            setInputMessage('');
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex gap-4 w-full">
      <Input
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        className="not-dark bg-white text-black"
      />
      <Button className="dark" onClick={sendMessage}>
        <SendHorizonalIcon className="dark " />
      </Button>
    </div>
  );
}
