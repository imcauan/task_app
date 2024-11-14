import { toast } from "@/hooks/use-toast";
import { DeleteWorkspaceAction } from "@/shared/workspaces/actions/delete-workspace.action";
import { useMutation } from "@tanstack/react-query";
import { redirect } from "next/navigation";

export function useDeleteWorkspace() {
  return useMutation({
    mutationFn: DeleteWorkspaceAction,
    onSuccess: () => {
      redirect(`/workspaces`);
    },
    onError: () => {
      toast({
        title: "Something went wrong while.",
      });
    },
  });
}
