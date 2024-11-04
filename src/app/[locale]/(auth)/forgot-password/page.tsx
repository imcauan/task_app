"use client";

import { ForgotPasswordForm } from "@/app/[locale]/(auth)/forgot-password/_components/forgot-password-form.component";
import { Container } from "@/components/common/Container/container.component";
import { Logo } from "@/components/common/Logo/logo.component";

export default function ForgotPasswordPage() {
  return (
    <Container className="w-full h-dvh lg:h-screen dark:bg-black flex flex-col items-center ">
      <Logo />
      <ForgotPasswordForm />
    </Container>
  );
}
