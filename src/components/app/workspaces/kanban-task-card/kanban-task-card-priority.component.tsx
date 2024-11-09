import { TaskPriority } from "@/shared/tasks/enums/task-priority.enum";
import React from "react";
import { tv } from "tailwind-variants";

interface KanbanTaskCardPriorityProps {
  priority?: TaskPriority;
}

const variants = tv({
  base: "w-fit p-2 rounded-xl text-white dark:text-black",
  variants: {
    priority: {
      High: "bg-red-300",
      Medium: "bg-yellow-200",
      Low: "bg-green-300",
    },
  },
});

export function KanbanTaskCardPriority({
  priority,
}: KanbanTaskCardPriorityProps) {
  return (
    <React.Fragment>
      <p className={variants({ priority: priority })}>{priority} priority</p>
    </React.Fragment>
  );
}
