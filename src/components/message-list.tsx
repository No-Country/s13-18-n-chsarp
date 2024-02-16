import { Message } from './message';

interface Props {
  messages: { user: string; content: string; id: string }[];
}

export const MessageList = ({ messages }: Props) => {
  return (
    <div className="flex flex-col w-full gap-y-1 overflow-y-auto">
      {messages.map((message, i) => (
        <Message
          key={message.id}
          {...message}
          prevUser={messages[i - 1]?.user || null}
        />
      ))}
    </div>
  );
};
