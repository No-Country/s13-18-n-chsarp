import { addChatSchema } from '@/components';
import { z } from 'zod';

export interface Channel {
  description: string;
  id: number;
  logoIcon: string | null;
  logoUrl: string | null;
  name: string;
  sessions: Session[];
}

interface Session {
  channelId: number;
  closeDate: string;
  createdDate: string;
  duration: string;
  id: number;
  initDate: string;
  messages: Message[];
  moderatorId: string;
  moderatorName: string;
  name: string;
  reviews: any;
  state: number;
  type: number;
}

export type AddChatSchema = z.infer<typeof addChatSchema>;

interface Message {
  sessionId: number;
  userName: string;
  text: string;
  date: string;
}

export type ChannelAdapted = Omit<Channel, 'logoIcon' | 'logoUrl'>;

export type HandleCreateChatFn = (
  values: AddChatSchema,
  channelId: number
) => void;
