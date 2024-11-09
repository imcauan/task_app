"use client";

import React from "react";
import { Chatbar } from "@/components/app/chat/chat-bar";
import { useUser } from "@/shared/auth/hooks/user.hook";
export default function Page() {
  const { data: user } = useUser();

  return (
    <div className="w-full h-dvh lg:h-screen flex dark:bg-black">
      <Chatbar user={user!} />
    </div>
  );
}
