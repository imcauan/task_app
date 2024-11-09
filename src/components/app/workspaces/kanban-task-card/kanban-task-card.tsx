import { KanbanTaskCardDetails } from "@/components/app/workspaces/kanban-task-card/kanban-task-card-details.component";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TaskEntity } from "@/shared/tasks/types/task.entity";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

interface KanbanTaskCardProps extends React.ComponentProps<"div"> {
  task: TaskEntity;
  deleteTask: (taskId: string) => void;
}

export function KanbanTaskCard({
  task,
  deleteTask,
  ...props
}: KanbanTaskCardProps) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return <div ref={setNodeRef} style={style} className="shadow-none"></div>;
  }

  return (
    <Card
      className="rounded-xl dark:bg-neutral-800"
      style={style}
      ref={setNodeRef}
      {...props}
    >
      <CardHeader className="flex justify-between p-4">
        <CardTitle
          className="font-normal text-sm"
          {...attributes}
          {...listeners}
        >
          {task.name}
        </CardTitle>
        <KanbanTaskCardDetails
          task={task}
          onDelete={() => deleteTask(task.id)}
        />
      </CardHeader>
    </Card>
  );
}
