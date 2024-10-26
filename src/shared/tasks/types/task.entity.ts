import { WorkspaceEntity } from "@/shared/workspaces/hooks/types/workspace.entity";

export interface TaskEntity {
  id: string;
  name: string;
  description: string;
  column_id: string;
  workspace: WorkspaceEntity;
  workspaceId: string;
}
