"use client";

import SettingsWorkspaceHeader from "@/components/app/workspaces/settings/settings-workspace-header";
import WorkspaceManagement from "@/components/app/workspaces/settings/workspace-management";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container.component";
import { useGetWorkspaceById } from "@/shared/workspaces/hooks/get-workspace-by-id.hook";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";

export default function WorkspaceSettingsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const workspaceId = searchParams["workspace"];
  const { data: workspace } = useGetWorkspaceById(workspaceId);

  return (
    <Container className="flex flex-col w-full h-full p-12 gap-4">
      <SettingsWorkspaceHeader />
      <WorkspaceManagement workspace={workspace as WorkspaceEntity} />
    </Container>
  );
}
