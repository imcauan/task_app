"use client";
import { SignUpForm } from "@/app/[locale]/(auth)/register/_components/sign-up-form.component";
import { Container } from "@/components/common/Container/container.component";
import React from "react";

export default function Page({ params }: { params: { workspaceId: string } }) {
  return (
    <Container className="w-full h-dvh lg:h-screen dark:bg-black flex justify-end items-center gap-4">
      <SignUpForm workspaceId={params.workspaceId} />
    </Container>
  );
}
