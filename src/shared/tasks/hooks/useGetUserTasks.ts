import { api } from "@/services/api";
import { TaskEntity } from "../interfaces/TaskEntity";
import { useQuery } from "@tanstack/react-query";

export function useGetUserTasks(user_id: string) {
  return useQuery({
    queryKey: ["userTasks", user_id],
    queryFn: () => GetUserTasksFn(user_id),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}

const GetUserTasksFn = async (user_id: string) => {
  const { data } = await api.get<TaskEntity[]>(`task/user/${user_id}`);

  return data;
};
