import { api } from "@/services/api";
import { TaskEntity } from "../types/task.entity";
import { useQuery } from "@tanstack/react-query";

export function useGetUserTasks(user_id: string) {
  const GetUserTasksFn = async () => {
    const { data } = await api.get<TaskEntity[]>(`task/user/${user_id}`);

    return data;
  };

  return useQuery({
    queryKey: ["userTasks"],
    queryFn: GetUserTasksFn,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}
