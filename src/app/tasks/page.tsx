"use client";

import React from "react";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";
import { Bottombar } from "@/components/mobile/Bottombar/bottom-bar";
import { KanbanBoard } from "@/components/common/KanbanTask/KanbanBoard/kanban-board";
import { useUser } from "@/shared/auth/hooks/user.hook";
import { RoundSpinner } from "@/components/common/Spinner/spinner";

export default function TaskPage() {
  const { isLoading, data: user } = useUser();
  return (
    <div className="w-full h-full flex dark:bg-black">
      <Sidebar />
      <div className="w-full h-full flex flex-col overflow-auto gap-4 mt-4">
        {isLoading ? (
          <RoundSpinner />
        ) : (
          <KanbanBoard columns={user?.columns} userId={user?.id!} />
        )}
        <Bottombar />
      </div>
    </div>
  );
}
