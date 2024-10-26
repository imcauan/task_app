import { useGetWorkspaceById } from "@/shared/workspaces/hooks/get-workspace-by-id.hook";
import React from "react";

interface TaskHasWorkspaceProps extends React.ComponentProps<"p"> {
  workspaceId: string;
}

export function TaskHasWorkspace({
  workspaceId,
  ...props
}: TaskHasWorkspaceProps) {
  const { data: workspace } = useGetWorkspaceById(workspaceId);

  return (
    <p {...props} className="text-xs">
      {workspace && `From ${workspace.name}`}
    </p>
  );
}
