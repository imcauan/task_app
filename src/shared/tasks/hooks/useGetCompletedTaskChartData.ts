import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function useGetCompletedTaskChartData(user_id: string) {
  const GetCompletedTaskChartDataFn = async () => {
    const { data } = await api.get(`task/chart/${user_id}`);

    return data;
  };

  return useQuery({
    queryKey: ["chartTasks"],
    queryFn: GetCompletedTaskChartDataFn,
  });
}
