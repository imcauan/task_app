export interface UpdateColumnTasksRequest {
  id: string;
  tasks: TasksToUpdate[];
}

export type TasksToUpdate = {
  id: string;
  order: number;
  columnId?: string;
};
