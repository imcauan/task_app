import { api } from "@/services/api";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";
import { useQuery } from "@tanstack/react-query";

export function useGetUserWorkspaces(id: string) {
  const GetUserWorkspacesFn = async () => {
    const { data } = await api.get<WorkspaceEntity[]>(`workspace/user/${id}`);

    return data;
  };

  return useQuery({
    queryKey: ["userWorkspaces"],
    queryFn: GetUserWorkspacesFn,
  });
}
