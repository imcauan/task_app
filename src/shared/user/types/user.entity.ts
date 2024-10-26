import { ChatEntity } from "@/shared/chat/types/chat.entity";
import { ColumnEntity } from "@/shared/column/types/column.entity";
import { TaskEntity } from "@/shared/tasks/types/task.entity";
import { WorkspaceEntity } from "@/shared/workspaces/hooks/types/workspace.entity";

export interface UserEntity {
  id: string;
  name: string;
  email: string;
  tasks: TaskEntity[];
  chats: ChatEntity[];
  columns: ColumnEntity[];
  workspaces: WorkspaceEntity[];
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  stripeSubscriptionStatus?: string;
  stripePriceId?: string;
  createdAt: Date;
  updatedAt: Date;
  image: File;
}
