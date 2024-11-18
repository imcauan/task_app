"use server";

import { api } from "@/services/api";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";

export async function GetWorkspaceByIdAction(id: string) {
  const { data } = await api.get<WorkspaceEntity>(`workspace/${id}`);

  return data;
}
