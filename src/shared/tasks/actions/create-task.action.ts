"use server";

import { api } from "@/services/api";
import { CreateTaskRequest } from "@/shared/tasks/types/create-task-request.interface";
import { TaskEntity } from "@/shared/tasks/types/task.entity";

export async function CreateTaskAction(
  data: CreateTaskRequest
): Promise<TaskEntity> {
  const { data: task } = await api.post<TaskEntity>("task", data);
  return task;
}
