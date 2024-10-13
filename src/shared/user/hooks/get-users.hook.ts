import { UserEntity } from "@/shared/user/types/user.entity";
import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function useGetUsers() {
  const GetUsersFn = async () => {
    const { data } = await api.get<UserEntity[]>("users");

    return data;
  };

  return useQuery({
    queryKey: ["users"],
    queryFn: GetUsersFn,
  });
}
