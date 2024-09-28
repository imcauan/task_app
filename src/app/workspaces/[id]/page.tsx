"use client";

import { Sidebar } from "@/components/common/Sidebar/Sidebar";
import { WorkspaceHeader } from "@/app/workspaces/_components/WorkspaceHeader/WorkspaceHeader";
import { useGetWorkspaceById } from "@/shared/workspaces/hooks/useGetWorkspaceById";
import { TaskList } from "@/components/common/TaskList/TaskList";
import { useWorkspaceTaskData } from "@/shared/workspaces/hooks/useWorkspaceTaskData";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { isLoading, data: workspace } = useGetWorkspaceById(id);
  const taskData = useWorkspaceTaskData(id);

  return (
    <div className="dark:bg-black w-full h-dvh lg:h-screen flex items-start">
      <Sidebar />
      {isLoading ? (
        <div className="w-full h-full flex justify-center-items-center">
          Loading...
        </div>
      ) : (
        <div className="flex flex-col h-full w-full">
          <WorkspaceHeader workspace={workspace!} />
          <div className="w-full flex gap-4 justify-center mt-6">
            {taskData.map((data) => (
              <TaskList
                key={data.title}
                userId={data.userId}
                title={data.title}
                type={data.type}
                tasks={data.tasks}
                workspaceId={id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
