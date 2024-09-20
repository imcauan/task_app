import { TaskStatus } from "@/app/tasks/enums/task-status.enum";
import { MembershipEntity } from "./MembershipEntity";
import { WorkspaceEntity } from "./WorkspaceEntity";

export interface TaskEntity {
  id: string;
  name: string;
  description: string;
  status: TaskStatus;
  workspace: WorkspaceEntity;
  Membership: MembershipEntity;
}
