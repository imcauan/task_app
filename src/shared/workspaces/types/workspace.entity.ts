import { ColumnEntity } from "@/shared/column/types/column.entity";
import { TaskEntity } from "@/shared/tasks/types/task.entity";
import { UserEntity } from "@/shared/user/types/user.entity";

export interface WorkspaceEntity {
  id: string;
  owner_id: string;
  members: UserEntity[];
  columns: ColumnEntity[];
  tasks: TaskEntity[];
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
