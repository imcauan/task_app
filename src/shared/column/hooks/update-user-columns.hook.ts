import { api } from "@/services/api";
import { UpdateUserColumnsRequest } from "../types/update-user-columns-request.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUserColumns() {
  const queryClient = useQueryClient();
  const updateUserColumnsFn = async (data: UpdateUserColumnsRequest) => {
    await api.patch(`column/user/${data.id}`, data);

    queryClient.setQueryData(["columns"], data.columns);
  };

  return useMutation({
    mutationFn: updateUserColumnsFn,
  });
}
