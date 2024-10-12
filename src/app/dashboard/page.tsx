"use client";

import React from "react";
import {
  DashboardCard,
  DashboardCardProps,
} from "./_components/DashboardCard/DashboardCard";
import { FaCheck, FaPlus } from "react-icons/fa";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";
import { TaskStatus } from "@/shared/tasks/enums/task-status.enum";
import { TaskCarousel } from "./_components/TaskCarousel/TaskCarousel";
import { UpcomingTasksHeader } from "./_components/UpcomingTasksHeader/UpcomingTasksHeader";
import { CompletedTaskChart } from "./_components/CompletedTaskChart/CompletedTaskChart";
import { useUser } from "@/shared/auth/hooks/useUser";
import { DashboardCarousel } from "@/components/mobile/dashboard/dashboard-carousel";
import { Bottombar } from "@/components/mobile/Bottombar/bottom-bar";

export default function Page() {
  const { isLoading, data: user } = useUser();

  const completedTasks = user?.tasks?.filter(
    (task) => task.status === TaskStatus.DONE
  );

  const onProgressTasks = user?.tasks?.filter(
    (task) => task.status === TaskStatus.ON_PROGRESS
  );

  const cardData: DashboardCardProps[] = [
    {
      icon: FaCheck,
      title: "Completed tasks.",
      number: completedTasks?.length!,
    },
    {
      icon: FaPlus,
      title: "New tasks.",
      number: user?.tasks?.length!,
    },
  ];

  return (
    <div className="w-full h-full flex dark:bg-black overflow-hidden">
      {isLoading ? (
        <div className="w-full h-full">
          <Sidebar />
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row h-screen w-full overflow-y-auto">
          <Sidebar />
          <div className="w-full h-full flex flex-col overflow-auto px-4 mt-10">
            <div className="mt-4 flex flex-col">
              <DashboardCarousel completedTasks={completedTasks} user={user!} />
              <div className="flex flex-col gap-4 w-full py-3">
                <UpcomingTasksHeader />
                <TaskCarousel tasks={onProgressTasks ?? []} />
              </div>
              <CompletedTaskChart user={user!} />
            </div>
          </div>
          <Bottombar />
        </div>
      )}
    </div>
  );
}
