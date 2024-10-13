import { UserEntity } from "@/shared/user/interfaces/UserEntity";
import { ChatEntity } from "./chat.entity";

export interface MessageEntity {
  id: string;
  chat: ChatEntity;
  content: string;
  image?: File;
  authorId: string;
}
