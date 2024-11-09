import { TaskPriority } from "@/shared/tasks/enums/task-priority.enum";
import { WorkspaceMember } from "@/shared/workspaces/types/workspace-member.type";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";
export interface TaskEntity {
  id: string;
  name: string;
  description: string;
  column_id: string;
  members?: WorkspaceMember[];
  workspace: WorkspaceEntity;
  workspaceId: string;
  priority: TaskPriority;
}
