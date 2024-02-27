import { MOCK_MESSAGES as messages } from '@/mock';
import { ChatHeader } from './chat-header';
import { ChatInput } from './chat-input';
import { MessageList } from './message-list';

export const Chat = () => {
  return (
    <div className="flex flex-col h-full">
      <ChatHeader />
      <div className="overflow-y-auto">
        <MessageList messages={messages} />
      </div>
      <div className="mt-auto min-h-[62px] flex items-center">
        <ChatInput />
      </div>
    </div>
  );
};
