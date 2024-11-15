import { toast } from "@/shared/ui/hooks/use-toast";
import { UpdateUserAction } from "@/shared/user/actions/update-user.action";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UpdateUserAction,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast({
        title: "✅ User updated successfully",
      });
    },
    onError(error) {
      console.log(error);
      toast({
        title: "❌ Something went wrong while updating user",
      });
    },
  });
}
