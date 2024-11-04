import { api } from "@/services/api";
import { ForgotPasswordRequest } from "@/shared/auth/types/forgot-password-request.interface";

export async function forgotPasswordAction({ email }: ForgotPasswordRequest) {
  if (!email) return;

  const { data } = await api.post<ForgotPasswordRequest>(`auth/forget`, {
    email,
  });

  return data;
}
