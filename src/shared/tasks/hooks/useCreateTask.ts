import { TaskEntity } from "@/entities/TaskEntity";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface CreateTaskRequest {
  name: string;
  description: string;
  user_id: string;
}

export function useCreateTask() {
  const queryClient = useQueryClient();
  const CreateTaskFn = async (data: CreateTaskRequest) => {
    const { data: task } = await api.post<TaskEntity>("task", data);

    queryClient.invalidateQueries({ queryKey: ["tasks"] });

    return task;
  };

  return useMutation({
    mutationFn: CreateTaskFn,
  });
}
