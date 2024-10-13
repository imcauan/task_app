import { TaskEntity } from "@/shared/tasks/interfaces/task.entity";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateTaskRequest } from "@/shared/tasks/interfaces/create-task-request.interface";

export function useCreateTask() {
  const queryClient = useQueryClient();
  const CreateTaskFn = async (data: CreateTaskRequest): Promise<TaskEntity> => {
    console.log(`workspaceId: ${data.workspaceId}`);

    const { data: task } = await api.post<TaskEntity>("task", data);

    return task;
  };

  return useMutation({
    mutationFn: CreateTaskFn,
    onSuccess(_, variables) {
      queryClient.invalidateQueries({
        queryKey: variables.workspaceId ? ["workspace"] : ["userTasks"],
      });
    },
  });
}
