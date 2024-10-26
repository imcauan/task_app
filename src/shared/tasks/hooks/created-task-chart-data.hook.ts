"use client";

import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { CreatedTaskChartData } from "../types/created-task-chart-data.interface";

export function useGetCreatedTaskChartData(user_id: string) {
  const GetCreatedTaskChartDataFn = async () => {
    const { data } = await api.get<CreatedTaskChartData[]>(
      `task/chart/${user_id}`
    );

    console.log(data);

    return data;
  };

  return useQuery({
    queryKey: ["chartTasks"],
    queryFn: GetCreatedTaskChartDataFn,
  });
}
