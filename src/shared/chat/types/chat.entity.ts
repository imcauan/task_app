import { UserEntity } from "@/shared/user/interfaces/UserEntity";
import { MessageEntity } from "@/shared/chat/types/message.entity";

export interface ChatEntity {
  id: string;
  members: UserEntity[];
  messages: MessageEntity[];
}
