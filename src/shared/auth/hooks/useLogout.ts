import { TokenService } from "@/services/token";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  queryClient.removeQueries({ queryKey: ["user"] });

  TokenService.removeToken();
  router.push("/login");
}
