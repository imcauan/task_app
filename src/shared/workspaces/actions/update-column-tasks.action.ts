"use server";

import { api } from "@/services/api";
import { UpdateColumnTasksRequest } from "@/shared/column/types/update-column-tasks-request.interface";
import { UpdateUserColumnsRequest } from "@/shared/column/types/update-user-columns-request.interface";

export async function UpdateColumnTasksAction(data: UpdateColumnTasksRequest) {
  try {
    const { data: response } = await api.patch<UpdateColumnTasksRequest>(
      `workspace/user/tasks`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
