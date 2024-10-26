import { api } from "@/services/api";
import { UpdateColumnTasksRequest } from "../types/update-column-tasks-request.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateColumnTasks() {
  const queryClient = useQueryClient();
  const UpdateColumnTasksFn = async (data: UpdateColumnTasksRequest) => {
    const { data: response } = await api.patch(`column/user/tasks`, data);

    return response;
  };

  return useMutation({
    mutationFn: UpdateColumnTasksFn,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["workspace"] });
    },
  });
}
