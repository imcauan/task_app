import { UserEntity } from "@/shared/user/types/user.entity";
import { MessageEntity } from "@/shared/chat/types/message.entity";

export interface ChatEntity {
  id: string;
  members: UserEntity[];
  messages: MessageEntity[];
}
