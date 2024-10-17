import { api } from "@/services/api";
import { ColumnEntity } from "../types/column.entity";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteColumn() {
  const queryClient = useQueryClient();

  const deleteColumnFn = async (id: string) => {
    const { data } = await api.delete<ColumnEntity>(`column/${id}`);

    return data;
  };
  return useMutation({
    mutationFn: deleteColumnFn,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["columns"] });
    },
  });
}
