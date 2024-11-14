import { WorkspacePriority } from "@/shared/workspaces/enums/workspace-priority.enum";

export interface CreateWorkspaceRequest {
  userId: string | undefined;
  name: string;
  priority: WorkspacePriority;
}
