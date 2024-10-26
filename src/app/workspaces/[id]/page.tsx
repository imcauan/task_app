"use client";

import { Sidebar } from "@/components/common/Sidebar/Sidebar";
import { WorkspaceHeader } from "@/app/workspaces/_components/WorkspaceHeader/WorkspaceHeader";
import { useGetWorkspaceById } from "@/shared/workspaces/hooks/get-workspace-by-id.hook";
import { useUser } from "@/shared/auth/hooks/user.hook";
import { KanbanBoard } from "@/components/common/KanbanTask/KanbanBoard/kanban-board";
import { RoundSpinner } from "@/components/common/Spinner/spinner";
import React from "react";
import { TaskEntity } from "@/shared/tasks/types/task.entity";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { isLoading, data: workspace } = useGetWorkspaceById(id);
  const { data: user } = useUser();
  const [tasks, setTasks] = React.useState<TaskEntity[]>(user?.tasks!);

  return (
    <div className="dark:bg-black w-full h-dvh lg:h-screen flex">
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <RoundSpinner />
        </div>
      ) : (
        <>
          <Sidebar />
          <div className="flex flex-col h-full w-full">
            <WorkspaceHeader workspace={workspace!} />
            <div className="w-full flex gap-4  h-full">
              <KanbanBoard
                tasks={tasks!}
                setTasks={setTasks}
                columns={workspace?.columns!}
                userId={user?.id!}
                workspaceId={id}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
