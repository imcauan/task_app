export interface UpdateColumnTasksRequest {
  id: string;
  tasks: TasksToUpdate[];
}

export type TasksToUpdate = {
  id: string;
  name: string;
  order: number;
  columnId?: string;
};
