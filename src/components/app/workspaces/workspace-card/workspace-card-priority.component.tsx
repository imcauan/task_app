import { WorkspacePriority } from "@/shared/workspaces/enums/workspace-priority.enum";
import React from "react";
import { tv } from "tailwind-variants";

interface WorkspaceCardPriorityProps {
  priority: WorkspacePriority;
}

const variants = tv({
  base: "w-fit p-2 rounded-xl dark:text-black",
  variants: {
    priority: {
      High: "bg-red-300",
      Medium: "bg-yellow-200",
      Low: "bg-green-300",
    },
  },
});

export function WorkspaceCardPriority({
  priority,
}: WorkspaceCardPriorityProps) {
  return (
    <React.Fragment>
      <p
        className={variants({
          priority,
        })}
      >
        {priority}{" "}
      </p>
    </React.Fragment>
  );
}
