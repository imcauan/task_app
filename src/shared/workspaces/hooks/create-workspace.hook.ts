import { toast } from "@/hooks/use-toast";
import { CreateWorkspaceAction } from "@/shared/workspaces/actions/create-workspace.action";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateWorkspace() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CreateWorkspaceAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => {
      toast({
        title: "Something went wrong while creating workspace",
      });
    },
  });
}
