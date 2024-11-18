import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateTaskAction } from "@/shared/tasks/actions/create-task.action";
import { toast } from "@/shared/ui/hooks/use-toast";

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CreateTaskAction,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["workspace"],
      });
      toast({
        title: "✅ Task created successfully",
      });
    },
    onError() {
      toast({
        title: "Something went wrong while creating task",
      });
    },
  });
}
