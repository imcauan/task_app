import { api } from "@/services/api";
import { ResetPasswordRequest } from "@/shared/auth/types/reset-password-request.interface";

export async function ResetPasswordAction(data: ResetPasswordRequest) {
  const { data: response } = await api.post(`auth/reset`, data);

  return response;
}
