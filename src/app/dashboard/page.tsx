"use client";

import React from "react";
import { DashboardCard } from "./_components/DashboardCard/DashboardCard";
import { FaCheck, FaPlus } from "react-icons/fa";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";
import { TaskStatus } from "@/shared/tasks/enums/task-status.enum";
import { TaskCarousel } from "./_components/TaskCarousel/TaskCarousel";
import { UpcomingTasksHeader } from "./_components/UpcomingTasksHeader/UpcomingTasksHeader";
import { CompletedTaskChart } from "./_components/CompletedTaskChart/CompletedTaskChart";
import { useUser } from "@/shared/auth/hooks/useUser";
import { useGetUserTasks } from "@/shared/tasks/hooks/useGetUserTasks";

export default function Page() {
  const { data: user } = useUser();
  const { data: tasks } = useGetUserTasks(user?.id!);

  const completedTasks = tasks?.filter(
    (task) => task.status === TaskStatus.DONE
  );

  const onProgressTasks = tasks?.filter(
    (task) => task.status === TaskStatus.ON_PROGRESS
  );

  return (
    <div className="w-full h-full flex dark:bg-black">
      <Sidebar />
      <div className="w-full h-full grid grid-cols-1 px-10 mt-10 space-y-4 gap-4">
        <h1>
          Hello, <strong>{user?.name}</strong>.
        </h1>
        <div className="w-full flex h-full gap-4">
          <DashboardCard
            icon={FaCheck}
            title="Completed tasks."
            number={completedTasks?.length!}
          />
          <DashboardCard
            icon={FaPlus}
            title="New tasks."
            number={tasks?.length!}
          />
        </div>
        <div className="w-full flex gap-6">
          <div className="flex flex-col gap-4 min-w-96">
            <CompletedTaskChart />
          </div>
          <div className="flex flex-col gap-4 border p-3">
            <UpcomingTasksHeader />
            <TaskCarousel tasks={onProgressTasks ?? []} />
          </div>
        </div>
      </div>
    </div>
  );
}
