import { toast } from "@/shared/ui/hooks/use-toast";
import { DeleteUserFromWorkspace } from "@/shared/workspaces/actions/delete-user-from-workspace.action";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteUserFromWorkspace() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: DeleteUserFromWorkspace,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workspace"] });
    },
    onError: () => {
      toast({
        title: "Something went wrong while deleting user from workspace",
      });
    },
  });
}
