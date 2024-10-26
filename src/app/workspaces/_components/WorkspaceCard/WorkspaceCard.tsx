import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkspaceEntity } from "@/shared/workspaces/hooks/types/workspace.entity";
import React from "react";

interface WorkspaceCardProps extends React.ComponentProps<"div"> {
  workspace: WorkspaceEntity;
}

export function WorkspaceCard({ workspace, ...props }: WorkspaceCardProps) {
  return (
    <Card className="rounded-none md:max-w-80" {...props}>
      <CardHeader className="flex flex-col gap-2">
        <CardTitle className="text-sm">{workspace.name}</CardTitle>
        <div className="flex justify-between">
          <p className="text-xs">{workspace.members.length} members.</p>
        </div>
      </CardHeader>
    </Card>
  );
}
