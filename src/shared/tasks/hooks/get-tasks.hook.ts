import { TaskEntity } from "../types/task.entity";
import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function useGetTasks() {
  const GetTasksFn = async () => {
    const { data } = await api.get<TaskEntity[]>("task");

    return data;
  };

  return useQuery({
    queryKey: ["tasks"],
    queryFn: GetTasksFn,
  });
}
