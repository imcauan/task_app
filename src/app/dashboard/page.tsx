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
    <div className="w-full h-full flex dark:bg-black">
      {isLoading ? (
        <div className="w-full h-full">
          <Sidebar />
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <Sidebar />
          <div className="w-full h-full grid grid-cols-1 px-4 mt-10 space-y-4 gap-4">
            <h1>
              Hello, <strong>{user?.name}</strong>.
            </h1>
            <div className="w-full flex h-full gap-4">
              {cardData.map((data) => (
                <DashboardCard
                  key={data.title}
                  title={data.title}
                  icon={data.icon}
                  number={data.number}
                />
              ))}
            </div>
            <div className="w-full flex gap-6">
              <div className="flex flex-col gap-4 min-w-96">
                <CompletedTaskChart user={user!} />
              </div>
              <div className="flex flex-col gap-4 p-3">
                <UpcomingTasksHeader />
                <TaskCarousel tasks={onProgressTasks ?? []} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
