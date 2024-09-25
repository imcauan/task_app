"use client";

import { Sidebar } from "@/components/common/Sidebar/Sidebar";
import React from "react";
import { Chatbar } from "./_components/Chatbar/Chatbar";
import { useUser } from "@/shared/auth/hooks/useUser";

export default function Page() {
  const { data: user } = useUser();

  return (
    <div className="w-full h-dvh lg:h-screen flex dark:bg-black">
      <Sidebar />
      <Chatbar user={user!} />
    </div>
  );
}
