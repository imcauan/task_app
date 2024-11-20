"use client";

import React from "react";
import { Chatbar } from "@/components/app/chat/chat-bar";
export default function Page() {
  return (
    <div className="w-full h-dvh lg:h-screen flex dark:bg-neutral-900">
      <Chatbar />
    </div>
  );
}
