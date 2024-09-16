"use client";

import { useQuery } from "@tanstack/react-query";
import { Header } from "../dashboard/_components/Header";
import { useAuthContext } from "@/hooks/useAuthContext";
import { GetWorkspaceTask } from "@/hooks/tasks/useGetWorkspaceTask";
import { TaskStatus } from "@/enums/task-status.enum";
import React from "react";
import { TaskList } from "./_components/TaskList/TaskList";
import { useGetTasks } from "@/hooks/tasks/useGetTasks";

export default function Page() {
  const { user } = useAuthContext();
  const { data: tasks } = useGetTasks();

  return (
    <div className="w-full h-screen">
      <Header user={user} />
      <div className="flex justify-center gap-4">
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
      </div>
    </div>
  );
}
