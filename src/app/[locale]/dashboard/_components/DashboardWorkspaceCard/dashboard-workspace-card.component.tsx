"use client";

import { DashboardWorkspaceCardHeader } from "@/app/[locale]/dashboard/_components/DashboardWorkspaceCard/dashboard-workspace-card-header.component";
import { DashboardWorkspaceCardPriority } from "@/app/[locale]/dashboard/_components/DashboardWorkspaceCard/dashboard-workspace-card-priority.component";
import { Container } from "@/components/common/Container/container.component";
import { Card, CardContent } from "@/components/ui/card";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";

interface DashboardWorkspaceCardProps {
  workspace: WorkspaceEntity;
}

export function DashboardWorkspaceCard({
  workspace,
}: DashboardWorkspaceCardProps) {
  return (
    <Card className="flex flex-col w-96 h-fit rounded-md">
      <DashboardWorkspaceCardHeader workspace={workspace} />
      <CardContent className="p-4 space-y-2">
        <Container className="w-full flex justify-end">
          <DashboardWorkspaceCardPriority priority="High priority" />
        </Container>
      </CardContent>
    </Card>
  );
}
