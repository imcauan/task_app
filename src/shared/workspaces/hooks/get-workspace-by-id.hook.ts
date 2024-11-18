import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GetWorkspaceByIdAction } from "@/shared/workspaces/actions/get-workspace-by-id.action";

export function useGetWorkspaceById(id: string) {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["workspace"],
    queryFn: () => GetWorkspaceByIdAction(id),
    enabled: !!id,
    initialData: () => queryClient.getQueryData(["workspace"]),
  });
}
