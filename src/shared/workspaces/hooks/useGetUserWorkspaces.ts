import { api } from "@/services/api";
import { WorkspaceEntity } from "@/shared/workspaces/interfaces/WorkspaceEntity";
import { useQuery } from "@tanstack/react-query";

export function useGetUserWorkspaces(id: string) {
  const GetUserWorkspacesFn = async () => {
    const { data } = await api.get<WorkspaceEntity[]>(`workspace/user/${id}`);

    return data;
  };

  return useQuery({
    queryKey: ["userWorkspaces"],
    queryFn: GetUserWorkspacesFn,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}
