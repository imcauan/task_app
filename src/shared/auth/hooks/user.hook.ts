import { api } from "@/services/api";
import { TokenService } from "@/services/token";
import { UserEntity } from "@/shared/user/types/user.entity";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const getUserFn = async () => {
    const accessToken = TokenService.getAccessToken();

    if (!accessToken) {
      return null;
    }

    const { data } = await api.get<UserEntity>("auth/me");
    return data;
  };

  return useQuery({
    queryKey: ["user"],
    queryFn: getUserFn,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
