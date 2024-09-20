import { TaskEntity } from "@/entities/TaskEntity";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTask() {
  const queryClient = useQueryClient();

  const DeleteTaskFn = async (id: string) => {
    const { data: task } = await api.delete<TaskEntity>(`task/${id}`);
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
    return task;
  };

  return useMutation({
    mutationFn: DeleteTaskFn,
  });
}
