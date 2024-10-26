import { api } from "@/services/api";
import { ColumnEntity } from "../types/column.entity";
import { UpdateColumnRequest } from "../types/update-column-request.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateColumn() {
  const queryClient = useQueryClient();
  const UpdateColumnFn = async (data: UpdateColumnRequest) => {
    const { data: column } = await api.patch<ColumnEntity>(`column/user`, data);

    return column as ColumnEntity;
  };

  return useMutation({
    mutationFn: UpdateColumnFn,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["workspace"] });
    },
  });
}
