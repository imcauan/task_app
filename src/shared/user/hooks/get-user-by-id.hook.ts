import { UserEntity } from "@/shared/user/types/user.entity";
import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function useGetUserById(id: string) {
  const GetUserByIdFn = async () => {
    const { data } = await api.get<UserEntity>(`users/${id}`);

    return data;
  };

  return useQuery({
    queryKey: ["taskUser"],
    queryFn: GetUserByIdFn,
  });
}
