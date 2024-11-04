"use client";

import { ResetPasswordAction } from "@/shared/auth/actions/reset-password.action";
import { ResetPasswordRequest } from "@/shared/auth/types/reset-password-request.interface";
import { useMutation } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export function useResetPassword() {
  const locale = useLocale();
  const router = useRouter();
  const resetPasswordFn = async ({
    token,
    password,
    confirmPassword,
  }: ResetPasswordRequest) => {
    if (password !== confirmPassword) return;

    await ResetPasswordAction({ token, password });
  };
  return useMutation({
    mutationFn: resetPasswordFn,
    onSuccess: () => {
      router.push(`/${locale}/dashboard`);
    },
  });
}
