"use client";

import { WorkspaceHeader } from "@/components/app/workspaces/workspace-header";
import { useGetWorkspaceById } from "@/shared/workspaces/hooks/get-workspace-by-id.hook";
import { useUser } from "@/shared/auth/hooks/user.hook";
import { KanbanBoard } from "@/components/app/workspaces/kanban-board";
import { RoundSpinner } from "@/components/ui/spinner";
import React from "react";
import { TaskEntity } from "@/shared/tasks/types/task.entity";
import { Container } from "@/components/ui/container.component";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { isLoading, data: workspace } = useGetWorkspaceById(id);
  const { data: user } = useUser();
  const [tasks, setTasks] = React.useState<TaskEntity[]>(user?.tasks!);

  return (
    <Container className="w-full h-dvh lg:h-screen flex">
      {isLoading ? (
        <Container className="w-full h-screen flex justify-center items-center">
          <RoundSpinner />
        </Container>
      ) : (
        <Container className="flex flex-col h-full w-full">
          <WorkspaceHeader workspace={workspace!} />
          <Container className="w-full flex gap-4  h-full">
            <KanbanBoard
              tasks={tasks!}
              setTasks={setTasks}
              columns={workspace?.columns!}
              userId={user?.id!}
              workspace={workspace!}
            />
          </Container>
        </Container>
      )}
    </Container>
  );
}
