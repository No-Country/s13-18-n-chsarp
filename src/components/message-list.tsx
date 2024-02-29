import { Message } from './message';

interface Props {
  messages: { userName: string; text: string }[];
}

export const MessageList = ({ messages }: Props) => {
  return (
    <div className="flex flex-col w-full gap-y-1 overflow-y-auto">
      {messages.map((message, i) => (
        <Message
          key={i}
          {...message}
          prevUser={messages[i - 1]?.userName || null}
        />
      ))}
    </div>
  );
};
