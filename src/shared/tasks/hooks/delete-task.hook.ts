import { TaskEntity } from "@/shared/tasks/interfaces/task.entity";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteTaskRequest } from "@/shared/tasks/interfaces/delete-task.request.interface";

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
