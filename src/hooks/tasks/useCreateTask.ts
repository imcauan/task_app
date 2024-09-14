/* 
name: string;
description: string;
status: TTaskStatus;
members: Membership[];
workspace_id: string;
*/

import { TaskEntity } from "@/entities/TaskEntity";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface CreateTaskRequest {
  name: string;
  description: string;
  membershipId: string | undefined;
  workspace_id: string;
}

export function useCreateTask() {
  const queryClient = useQueryClient();
  const CreateTaskFn = async (data: CreateTaskRequest) => {
    const { data: task } = await api.post<TaskEntity>("task", data);

    queryClient.invalidateQueries({ queryKey: ["workspaceTasks"] });

    return task;
  };

  return useMutation({
    mutationFn: CreateTaskFn,
  });
}
