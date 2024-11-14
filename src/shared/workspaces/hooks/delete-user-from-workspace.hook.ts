import { DeleteUserFromWorkspace } from "@/shared/workspaces/actions/delete-user-from-workspace.action";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteUserFromWorkspace() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: DeleteUserFromWorkspace,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}
