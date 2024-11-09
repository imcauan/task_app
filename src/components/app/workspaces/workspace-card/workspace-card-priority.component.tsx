import React from "react";

interface DashboardWorkspaceCardPriorityProps {
  priority: string;
}

export function DashboardWorkspaceCardPriority({
  priority,
}: DashboardWorkspaceCardPriorityProps) {
  return (
    <React.Fragment>
      <p className="text-xs text-white p-2 rounded-full bg-red-300">
        {priority}
      </p>
    </React.Fragment>
  );
}
