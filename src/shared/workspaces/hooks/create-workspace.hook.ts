import { api } from "@/services/api";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface CreateWorkspaceRequest {
  userId: string | undefined;
  name: string;
}

export function useCreateWorkspace() {
  const queryClient = useQueryClient();

  const CreateWorkspaceFn = async (data: CreateWorkspaceRequest) => {
    const { data: workspace } = await api.post<WorkspaceEntity>(
      "workspace",
      data
    );

    queryClient.invalidateQueries({ queryKey: ["user"] });

    return workspace;
  };

  return useMutation({
    mutationFn: CreateWorkspaceFn,
  });
}
