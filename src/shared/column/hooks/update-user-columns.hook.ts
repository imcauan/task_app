import { api } from "@/services/api";
import { UpdateUserColumnsRequest } from "../types/update-user-columns-request.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUserColumns() {
  const queryClient = useQueryClient();
  const updateUserColumnsFn = async (data: UpdateUserColumnsRequest) => {
    const { data: response } = await api.put<UpdateUserColumnsRequest>(
      `workspace/user`,
      data
    );

    return response;
  };

  return useMutation({
    mutationFn: updateUserColumnsFn,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["workspace"] });
    },
  });
}
