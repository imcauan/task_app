import { TaskEntity } from "@/shared/tasks/interfaces/TaskEntity";
import { UserEntity } from "@/shared/user/interfaces/UserEntity";

export interface WorkspaceEntity {
  id: string;
  owner_id: string;
  members: UserEntity[];
  tasks: TaskEntity[];
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
