import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TaskStatus } from "@/shared/tasks/enums/task-status.enum";
import { TaskEntity } from "@/shared/tasks/interfaces/TaskEntity";

interface StartTaskRequest {
  taskId: string;
  workspaceId?: string;
  status: TaskStatus;
}

export function useStartTask() {
  const queryClient = useQueryClient();
  const StartTaskFn = async (data: StartTaskRequest) => {
    console.log(data);

    const { data: task } = await api.patch<TaskEntity>(
      `task/${data.taskId}`,
      data
    );

    queryClient.invalidateQueries({
      queryKey: data.workspaceId ? ["workspace"] : ["tasks"],
    });

    return task;
  };

  return useMutation({
    mutationFn: StartTaskFn,
  });
}
