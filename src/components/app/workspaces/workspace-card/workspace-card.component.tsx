"use client";

import { WorkspaceCardHeader } from "@/components/app/workspaces/workspace-card/workspace-card-header.component";
import { WorkspaceCardPriority } from "@/components/app/workspaces/workspace-card/workspace-card-priority.component";
import { Container } from "@/components/ui/container.component";
import { Card, CardContent } from "@/components/ui/card";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";

interface WorkspaceCardProps {
  workspace: WorkspaceEntity;
}

export function WorkspaceCard({ workspace }: WorkspaceCardProps) {
  return (
    <Card className="dark:bg-neutral-900 flex flex-col w-96 h-fit rounded-md">
      <WorkspaceCardHeader workspace={workspace} />
      <CardContent className="p-4 space-y-2">
        <Container className="w-full flex justify-end">
          <WorkspaceCardPriority priority={workspace.priority} />
        </Container>
      </CardContent>
    </Card>
  );
}
