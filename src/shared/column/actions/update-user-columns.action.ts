"use server";

import { api } from "@/services/api";
import { UpdateUserColumnsRequest } from "@/shared/column/types/update-user-columns-request.interface";

export async function UpdateUserColumnsAction(data: UpdateUserColumnsRequest) {
  try {
    const { data: response } = await api.put<UpdateUserColumnsRequest>(
      `workspace/user`,
      data
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}
