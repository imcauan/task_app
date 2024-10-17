import { api } from "@/services/api";
import { ColumnEntity } from "@/shared/column/types/column.entity";
import { useQuery } from "@tanstack/react-query";

export function useGetUserColumns(userId: string) {
  async function GetUserColumnsFn() {
    const { data } = await api.get<ColumnEntity[]>(`column/user/${userId}`);

    return data;
  }

  return useQuery({
    queryKey: ["columns"],
    queryFn: GetUserColumnsFn,
  });
}
