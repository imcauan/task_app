import React from "react";

interface WorkspaceCardPriorityProps {
  priority: string;
}

export function WorkspaceCardPriority({
  priority,
}: WorkspaceCardPriorityProps) {
  return (
    <React.Fragment>
      <p className="text-xs text-white p-2 rounded-full bg-red-300">
        {priority}
      </p>
    </React.Fragment>
  );
}
