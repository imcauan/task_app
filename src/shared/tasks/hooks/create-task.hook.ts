import { TaskEntity } from "@/shared/tasks/types/task.entity";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateTaskRequest } from "@/shared/tasks/types/create-task-request.interface";

export function useCreateTask() {
  const queryClient = useQueryClient();
  const CreateTaskFn = async (data: CreateTaskRequest): Promise<TaskEntity> => {
    const { data: task } = await api.post<TaskEntity>("task", data);

    return task;
  };

  return useMutation({
    mutationFn: CreateTaskFn,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["workspace"],
      });
    },
  });
}
