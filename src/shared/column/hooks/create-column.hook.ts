import { api } from "@/services/api";
import { CreateColumnRequest } from "@/shared/column/types/create-column-request.interface";
import { ColumnEntity } from "../types/column.entity";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateColumn() {
  const queryClient = useQueryClient();
  const CreateColumnFn = async (data: CreateColumnRequest) => {
    const { data: column } = await api.post<ColumnEntity>("column", data);

    return column as ColumnEntity;
  };

  return useMutation({
    mutationFn: CreateColumnFn,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["columns"] });
    },
  });
}
