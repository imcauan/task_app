import { ColumnEntity } from "@/shared/column/types/column.entity";
import { TaskEntity } from "@/shared/tasks/types/task.entity";
import { UserEntity } from "@/shared/user/types/user.entity";
import { WorkspacePriority } from "@/shared/workspaces/enums/workspace-priority.enum";

export interface WorkspaceEntity {
  id: string;
  owner_id: string;
  priority: WorkspacePriority;
  members: UserEntity[];
  columns: ColumnEntity[];
  tasks: TaskEntity[];
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
