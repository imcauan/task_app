import { TaskEntity } from "../interfaces/task.entity";
import { TaskStatus } from "../enums/task-status.enum";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FinishTaskRequest } from "@/shared/tasks/interfaces/finish-task-request.interface";

export function useFinishTask() {
  const queryClient = useQueryClient();

  const FinishTaskFn = async (data: FinishTaskRequest) => {
    const { data: task } = await api.patch<TaskEntity>(`task/${data.id}`, {
      status: TaskStatus.DONE,
    });

    queryClient.invalidateQueries({
      queryKey: data.workspaceId ? ["workspace"] : ["userTasks"],
    });

    return task;
  };

  return useMutation({
    mutationFn: FinishTaskFn,
  });
}
