export interface CreateTaskRequest {
  name: string;
  description: string;
  user_id: string;
  workspaceId?: string;
}
