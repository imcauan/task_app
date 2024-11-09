"use client";

import { Container } from "@/components/ui/container.component";
import { SignInForm } from "@/components/app/auth/login/sign-in-form.component";

export default function Page() {
  return (
    <Container className="w-full h-dvh lg:h-screen flex items-center gap-4">
      <SignInForm />
    </Container>
  );
}
