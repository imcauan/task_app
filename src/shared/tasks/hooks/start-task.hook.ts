import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TaskEntity } from "@/shared/tasks/interfaces/task.entity";
import { StartTaskRequest } from "../interfaces/start-task.request.interface";

export function useStartTask() {
  const queryClient = useQueryClient();
  const StartTaskFn = async (data: StartTaskRequest) => {
    console.log(data);

    const { data: task } = await api.patch<TaskEntity>(
      `task/${data.taskId}`,
      data
    );

    queryClient.invalidateQueries({
      queryKey: data.workspaceId ? ["workspace"] : ["userTasks"],
    });

    return task;
  };

  return useMutation({
    mutationFn: StartTaskFn,
  });
}
