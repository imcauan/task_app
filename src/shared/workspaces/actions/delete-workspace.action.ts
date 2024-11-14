"use server";

import { api } from "@/services/api";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";
import { getLocale } from "next-intl/server";
import { redirect } from "next/navigation";

export async function DeleteWorkspaceAction(id: string) {
  const locale = await getLocale();
  try {
    await api.delete<WorkspaceEntity>(`workspace/${id}`);
    redirect(`/${locale}/workspaces`);
  } catch (error) {
    console.log(error);
  }
}
