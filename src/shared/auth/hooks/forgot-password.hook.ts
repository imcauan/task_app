import { forgotPasswordAction } from "@/shared/auth/actions/forgot-password.action";
import { ForgotPasswordRequest } from "@/shared/auth/types/forgot-password-request.interface";

export function useForgotPassword() {
  const forgotPasswordFn = async ({ email }: ForgotPasswordRequest) => {
    await forgotPasswordAction({ email });
  };

  return { forgotPasswordFn };
}
