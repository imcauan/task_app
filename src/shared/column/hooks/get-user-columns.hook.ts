import { GetUserColumnsAction } from "@/shared/column/actions/get-user-columns.action";
import { useQuery } from "@tanstack/react-query";

export function useGetUserColumns(userId: string) {
  return useQuery({
    queryKey: ["columns"],
    queryFn: () => GetUserColumnsAction(userId),
    enabled: !!userId,
    refetchInterval: 5000,
  });
}
