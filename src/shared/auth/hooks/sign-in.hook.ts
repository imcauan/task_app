import { api } from "@/services/api";
import { TokenService } from "@/services/token";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { TAccessToken } from "@/shared/auth/types/TAccessToken";
import { SignInRequest } from "@/shared/auth/types/sign-in-request.interface";

export function useSignIn() {
  const router = useRouter();
  const SignInFn = async (data: SignInRequest) => {
    const { data: response } = await api.post<TAccessToken>(
      "/auth/signin",
      data
    );

    TokenService.saveAccessToken(response.token);
  };

  return useMutation({
    mutationFn: SignInFn,
    onSuccess: () => {
      router.push("/dashboard");
    },
    onError(error) {
      console.log(error);
    },
  });
}
