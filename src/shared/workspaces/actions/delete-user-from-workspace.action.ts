"use server";

import { api } from "@/services/api";
import { DeleteUserFromWorkspaceRequest } from "@/shared/workspaces/types/delete-user-from-workspace-request.interface";

export async function DeleteUserFromWorkspace(
  data: DeleteUserFromWorkspaceRequest
) {
  console.log(data);
  try {
    await api
      .post<DeleteUserFromWorkspaceRequest>(`workspace/user`, data)
      .then((res) => res.data);
  } catch (error) {
    console.log(error);
  }
}
