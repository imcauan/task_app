import { TokenService } from "@/services/token";
import { useQueryClient } from "@tanstack/react-query";

export async function useLogout() {
  const queryClient = useQueryClient();

  queryClient.removeQueries({ queryKey: ["user"] });

  TokenService.removeToken();
}
