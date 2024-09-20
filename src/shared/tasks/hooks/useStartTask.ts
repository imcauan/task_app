import { TaskEntity } from "@/entities/TaskEntity";
import { TaskStatus } from "@/app/tasks/enums/task-status.enum";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface StartTaskRequest {
  taskId: string;
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

    queryClient.invalidateQueries({ queryKey: ["tasks"] });

    return task;
  };

  return useMutation({
    mutationFn: StartTaskFn,
  });
}
