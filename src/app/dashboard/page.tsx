"use client";

import { useAuthContext } from "@/hooks/useAuthContext";
import React from "react";
import { DashboardCard } from "./_components/DashboardCard/DashboardCard";
import { FaCheck, FaPlus } from "react-icons/fa";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";
import { useGetTasks } from "@/hooks/tasks/useGetTasks";
import { TaskStatus } from "@/enums/task-status.enum";
import { NewTaskChart } from "./_components/NewTaskChart/NewTaskChart";
import { TaskCarousel } from "./_components/TaskCarousel/TaskCarousel";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";

export default function Page() {
  const { user } = useAuthContext();
  const { data: tasks } = useGetTasks();

  console.log(tasks);

  const completedTasks = tasks?.filter(
    (task) => task.status === TaskStatus.DONE
  );

  const onProgressTasks = tasks?.filter(
    (task) => task.status === TaskStatus.ON_PROGRESS
  );

  return (
    <div className="w-full h-full flex">
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
        <div className="max-w-96">
          <NewTaskChart />
        </div>
        <div className="flex flex-col justify-center gap-3">
          <div className="flex items-center gap-4">
            <h1 className="">Upcoming tasks.</h1>
            <Link
              href="/tasks"
              className="flex items-center text-sm border p-1 bg-black text-white rounded"
            >
              <p>View all</p>
              <MdNavigateNext className="text-lg hover:border-b border-b-black" />
            </Link>
          </div>
          <TaskCarousel tasks={onProgressTasks ?? []} />
        </div>
      </div>
    </div>
  );
}
