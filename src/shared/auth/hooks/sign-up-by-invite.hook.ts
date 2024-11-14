import { useRouter } from "next/navigation";
import { api } from "@/services/api";
import { TokenService } from "@/services/token";
import { useMutation } from "@tanstack/react-query";
import { TAccessToken } from "@/shared/auth/types/TAccessToken";
import { SignUpByInviteRequest } from "../types/sign-up-by-invite-request.interface";

export function useSignUpByInvite() {
  const router = useRouter();
  const SignUpByInviteFn = async (data: SignUpByInviteRequest) => {
    const { data: response } = await api.post<TAccessToken>(
      "/auth/signup/invite",
      data
    );

    TokenService.saveAccessToken(response.token);
  };

  return useMutation({
    mutationFn: SignUpByInviteFn,
    onSuccess: () => {
      router.push("/dashboard");
    },
    onError(error) {
      console.log(error);
    },
  });
}
