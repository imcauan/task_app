import { TaskEntity } from "@/entities/TaskEntity";
import { TaskStatus } from "@/enums/task-status.enum";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useFinishTask() {
  const queryClient = useQueryClient();

  const FinishTaskFn = async (id: string) => {
    const { data: task } = await api.patch<TaskEntity>(`task/${id}`, {
      status: TaskStatus.DONE,
    });

    queryClient.invalidateQueries({ queryKey: ["tasks"] });

    return task;
  };

  return useMutation({
    mutationFn: FinishTaskFn,
  });
}
