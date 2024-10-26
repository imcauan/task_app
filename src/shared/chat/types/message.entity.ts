import { ChatEntity } from "./chat.entity";

export interface MessageEntity {
  id: string;
  chat: ChatEntity;
  content: string;
  image?: File;
  authorId: string;
}
