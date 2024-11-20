"use client";

import { WorkspaceHeader } from "@/components/app/workspaces/workspace-header";
import { useGetWorkspaceById } from "@/shared/workspaces/hooks/get-workspace-by-id.hook";
import { useUser } from "@/shared/auth/hooks/user.hook";
import { KanbanBoard } from "@/components/app/workspaces/kanban-board";
import { RoundSpinner } from "@/components/ui/spinner";
import React from "react";
import { Container } from "@/components/ui/container.component";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const id = searchParams["id"] ?? "";
  const { data: user } = useUser();
  const { isLoading, data: workspace } = useGetWorkspaceById(id);

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
            <KanbanBoard userId={user?.id!} workspace={workspace!} />
          </Container>
        </Container>
      )}
    </Container>
  );
}
