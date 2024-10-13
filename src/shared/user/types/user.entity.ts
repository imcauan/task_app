import { ChatEntity } from "@/shared/chat/types/chat.entity";
import { TaskEntity } from "@/shared/tasks/interfaces/task.entity";
import { WorkspaceEntity } from "@/shared/workspaces/interfaces/WorkspaceEntity";

export interface UserEntity {
  id: string;
  name: string;
  email: string;
  tasks: TaskEntity[];
  chats: ChatEntity[];
  workspaces: WorkspaceEntity[];
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  stripeSubscriptionStatus?: string;
  createdAt: Date;
  updatedAt: Date;
  image: File;
}
