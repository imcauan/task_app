import { TaskPriority } from "@/shared/tasks/enums/task-priority.enum";
import { UserEntity } from "@/shared/user/types/user.entity";

export interface CreateTaskRequest {
  name: string;
  description: string;
  columnId: string;
  priority: TaskPriority;
  members?: UserEntity[];
  workspaceId?: string;
}
