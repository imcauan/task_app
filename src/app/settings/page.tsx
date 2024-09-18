"use client";

import { Sidebar } from "@/components/common/Sidebar/Sidebar";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { UpdateUserForm } from "./_components/UpdateUserForm/UpdateUserForm";
import { Button } from "@/components/ui/button";

export default function Page() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full h-dvh lg:h-screen flex dark:bg-black">
      <Sidebar />
      <div className="flex flex-col h-full w-full px-10 mt-10 gap-4">
        <h1 className="text-xl font-semibold">Settings</h1>
        <div className="flex flex-col gap-2">
          <h1>Theme mode</h1>
          <div className="flex items-center gap-4">
            <Switch
              onCheckedChange={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
            />
            <p>{theme === "dark" ? <FaMoon /> : <FaSun />}</p>
          </div>
        </div>
        <UpdateUserForm />
      </div>
    </div>
  );
}
