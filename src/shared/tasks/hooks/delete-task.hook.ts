import { api } from "@/services/api";
import { TaskEntity } from "../types/task.entity";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTask() {
  const queryClient = useQueryClient();
  const DeleteTaskFn = async (id: string) => {
    const { data } = await api.delete<TaskEntity>(`task/${id}`);

    return data;
  };

  return useMutation({
    mutationFn: DeleteTaskFn,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["workspace"] });
    },
  });
}
