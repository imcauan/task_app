import { UserEntity } from "@/shared/user/interfaces/UserEntity";
import { MessageEntity } from "./MessageEntity";

export interface ChatEntity {
  id: string;
  members: UserEntity[];
  messages: MessageEntity[];
}
