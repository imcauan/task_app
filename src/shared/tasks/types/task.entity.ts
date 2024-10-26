import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";

export interface TaskEntity {
  id: string;
  name: string;
  description: string;
  column_id: string;
  workspace: WorkspaceEntity;
  workspaceId: string;
}
