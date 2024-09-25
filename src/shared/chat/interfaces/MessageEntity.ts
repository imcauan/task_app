import { UserEntity } from "@/shared/user/interfaces/UserEntity";
import { ChatEntity } from "./ChatEntity";

export interface MessageEntity {
  id: string;
  chat: ChatEntity;
  content: string;
  image?: File;
  authorId: string;
}
