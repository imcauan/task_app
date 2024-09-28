import { TaskEntity } from "../interfaces/TaskEntity";
import { TaskStatus } from "../enums/task-status.enum";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface DeleteTaskRequest {
  id: string;
  workspaceId?: string;
}

export function useFinishTask() {
  const queryClient = useQueryClient();

  const FinishTaskFn = async (data: DeleteTaskRequest) => {
    const { data: task } = await api.patch<TaskEntity>(`task/${data.id}`, {
      status: TaskStatus.DONE,
    });

    queryClient.invalidateQueries({
      queryKey: data.workspaceId ? ["workspace"] : ["tasks"],
    });

    return task;
  };

  return useMutation({
    mutationFn: FinishTaskFn,
  });
}
