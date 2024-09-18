"use client";

import { useAuthContext } from "@/hooks/useAuthContext";
import { TaskStatus } from "@/enums/task-status.enum";
import React from "react";
import { TaskList } from "./_components/TaskList/TaskList";
import { useGetTasks } from "@/hooks/tasks/useGetTasks";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";

export default function Page() {
  const { user } = useAuthContext();
  const { data: tasks } = useGetTasks();

  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="flex px-10 mt-10 w-full">
        <TaskList
          userId={user?.id!}
          title="To-do"
          type={TaskStatus.TODO}
          tasks={tasks ?? []}
        />
        <TaskList
          userId={user?.id!}
          title="On progress"
          type={TaskStatus.ON_PROGRESS}
          tasks={tasks ?? []}
        />

        <TaskList
          userId={user?.id!}
          title="Finished"
          type={TaskStatus.DONE}
          tasks={tasks ?? []}
        />
      </div>
    </div>
  );
}
