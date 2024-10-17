import { TaskEntity } from "@/shared/tasks/types/task.entity";

export interface ColumnEntity {
  id: string;
  title: string;
  tasks: TaskEntity[];
  userId: string;
  workspaceId?: string;
  createdAt: Date;
  updatedAt: Date;
}
