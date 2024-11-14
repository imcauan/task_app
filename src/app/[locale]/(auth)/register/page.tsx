"use client";
import { SignUpForm } from "@/components/app/auth/register/sign-up-form.component";
import { Container } from "@/components/ui/container.component";
import React from "react";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const workspaceId = searchParams["workspaceId"];
  return (
    <Container className="w-full h-dvh lg:h-screen flex items-center gap-4">
      <SignUpForm workspaceId={workspaceId} />
    </Container>
  );
}
