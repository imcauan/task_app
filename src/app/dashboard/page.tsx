"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import { useUser } from "@/shared/auth/hooks/user.hook";
import { DashboardCardProps } from "@/app/dashboard/_components/DashboardCard/DashboardCard";
import { TaskCarousel } from "@/app/dashboard/_components/TaskCarousel/TaskCarousel";
import { UpcomingTasksHeader } from "@/app/dashboard/_components/UpcomingTasksHeader/UpcomingTasksHeader";
import { CompletedTaskChart } from "@/app/dashboard/_components/CompletedTaskChart/CompletedTaskChart";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";
import { DashboardCarousel } from "@/components/mobile/dashboard/dashboard-carousel";
import { Bottombar } from "@/components/mobile/Bottombar/bottom-bar";
import { useGetUserTasks } from "@/shared/tasks/hooks/get-user-tasks.hook";
import { RoundSpinner } from "@/components/common/Spinner/spinner";

export default function Page() {
  const { isLoading, data: user } = useUser();
  const { data: userTasks } = useGetUserTasks(user?.id!);

  const cardData: DashboardCardProps[] = [
    {
      icon: FaPlus,
      title: "New tasks.",
      number: user?.tasks?.length!,
    },
  ];

  return (
    <div className="w-full h-full flex dark:bg-black overflow-hidden">
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <RoundSpinner />
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row h-screen w-full overflow-y-auto">
          <Sidebar />
          <div className="w-full flex flex-col overflow-auto px-4 mt-10">
            <div className="flex flex-col h-screen lg:h-full space-y-2">
              <h1>
                Hello, <strong>{user?.name}</strong>
              </h1>
              <DashboardCarousel cardData={cardData} user={user!} />
              <div className="flex flex-col gap-4 w-full py-3">
                <UpcomingTasksHeader />
                <TaskCarousel tasks={userTasks ?? []} />
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
