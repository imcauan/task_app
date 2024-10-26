export interface CreateTaskRequest {
  name: string;
  description: string;
  user_id: string;
  columnId: string;
  workspaceId?: string;
}
