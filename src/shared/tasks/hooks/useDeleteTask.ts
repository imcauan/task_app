import { TaskEntity } from "@/shared/tasks/interfaces/TaskEntity";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface DeleteTaskRequest {
  id: string;
  workspaceId?: string;
}

export function useDeleteTask() {
  const queryClient = useQueryClient();

  const DeleteTaskFn = async ({ id, workspaceId }: DeleteTaskRequest) => {
    const { data: task } = await api.delete<TaskEntity>(`task/${id}`);

    queryClient.invalidateQueries({
      queryKey: workspaceId ? ["workspace"] : ["userTasks"],
    });

    return task;
  };

  return useMutation({
    mutationFn: DeleteTaskFn,
  });
}
