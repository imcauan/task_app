import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { WorkspaceEntity } from "../interfaces/WorkspaceEntity";

export function useGetWorkspaceById(id: string) {
  const GetWorkspaceByIdFn = async () => {
    const { data } = await api.get<WorkspaceEntity>(`workspace/${id}`);

    return data;
  };

  return useQuery({
    queryKey: ["workspace"],
    queryFn: GetWorkspaceByIdFn,
  });
}
