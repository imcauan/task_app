import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkspaceEntity } from "@/shared/workspaces/interfaces/WorkspaceEntity";
import React from "react";

interface WorkspaceCardProps extends React.ComponentProps<"div"> {
  workspace: WorkspaceEntity;
}

export function WorkspaceCard({ workspace, ...props }: WorkspaceCardProps) {
  return (
    <Card className="rounded-none" {...props}>
      <CardHeader className="flex flex-col gap-2">
        <CardTitle className="text-sm">{workspace.name}</CardTitle>
        <div className="flex justify-between">
          <p className="text-xs">{workspace.members.length} members.</p>
          <p className="text-xs">{workspace.tasks.length} tasks.</p>
        </div>
      </CardHeader>
    </Card>
  );
}
