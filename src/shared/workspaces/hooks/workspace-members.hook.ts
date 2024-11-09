import { useGetWorkspaceById } from "@/shared/workspaces/hooks/get-workspace-by-id.hook";
import { WorkspaceMember } from "@/shared/workspaces/types/workspace-member.type";

export function useWorkspaceMembers(workspaceId: string) {
  const { data: workspace } = useGetWorkspaceById(workspaceId);

  const taskMembers =
    workspace?.members.map((member) => ({
      id: member.id,
      image: member.image?.name,
      name: member.name,
    })) || ([] satisfies WorkspaceMember[]);

  return taskMembers;
}
