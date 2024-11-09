import React from "react";
import "../globals.css";
import { Container } from "@/components/ui/container.component";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container className="dark:bg-neutral-900 w-full h-screen flex justify-center items-center">
      {children}
    </Container>
  );
}
