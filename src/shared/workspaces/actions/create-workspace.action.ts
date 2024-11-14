"use server";
import { api } from "@/services/api";
import { CreateWorkspaceRequest } from "@/shared/workspaces/types/create-workspace-request.interface";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";

export async function CreateWorkspaceAction(data: CreateWorkspaceRequest) {
  try {
    await api.post<WorkspaceEntity>("workspace", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
