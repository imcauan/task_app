"use client";

import { Container } from "@/components/common/Container/container.component";
import { SignInForm } from "@/app/[locale]/(auth)/login/_components/sign-in-form.component";

// TODO: create forget password

export default function Page() {
  return (
    <Container className="w-full h-dvh lg:h-screen dark:bg-black flex justify-end items-center gap-4">
      <SignInForm />
    </Container>
  );
}
