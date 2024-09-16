import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function useGetNewTaskChartData(user_id: string) {
  const GetNewTaskChartDataFn = async () => {
    const { data } = await api.get(`task/chart/${user_id}`);

    return data;
  };

  return useQuery({
    queryKey: ["chartTasks"],
    queryFn: GetNewTaskChartDataFn,
  });
}
