"use client";

import { ForgotPasswordForm } from "@/components/app/auth/forgot-password/forgot-password-form.component";
import { Container } from "@/components/ui/container.component";

export default function ForgotPasswordPage() {
  return (
    <Container className="w-full h-full flex justify-center items-center">
      <ForgotPasswordForm />
    </Container>
  );
}
