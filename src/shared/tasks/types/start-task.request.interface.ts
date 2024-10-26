import { TaskStatus } from "@/shared/tasks/enums/task-status.enum";

export interface StartTaskRequest {
  taskId: string;
  workspaceId?: string;
  status: TaskStatus;
}
