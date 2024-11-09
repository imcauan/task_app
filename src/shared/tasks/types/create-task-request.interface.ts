import { TaskPriority } from "@/shared/tasks/enums/task-priority.enum";
import { WorkspaceMember } from "@/shared/workspaces/types/workspace-member.type";

export interface CreateTaskRequest {
  name: string;
  description: string;
  user_id: string;
  columnId: string;
  priority: TaskPriority;
  members?: WorkspaceMember[];
  workspaceId?: string;
}
