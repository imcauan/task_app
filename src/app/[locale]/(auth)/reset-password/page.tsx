"use client";

import { ResetPasswordForm } from "@/components/app/auth/reset-password/reset-password-form.component";
import { Container } from "@/components/ui/container.component";
import { Logo } from "@/components/ui/logo.component";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  return (
    <Container className="w-full h-dvh lg:h-screen dark:bg-black flex flex-col items-center">
      <Logo />
      <ResetPasswordForm token={token!} />
    </Container>
  );
}
