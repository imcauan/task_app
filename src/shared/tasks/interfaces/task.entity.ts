import { WorkspaceEntity } from "@/shared/workspaces/interfaces/WorkspaceEntity";
import { TaskStatus } from "@/shared/tasks/enums/task-status.enum";

export interface TaskEntity {
  id: string;
  name: string;
  description: string;
  status: TaskStatus;
  workspace: WorkspaceEntity;
  workspaceId: string;
}
