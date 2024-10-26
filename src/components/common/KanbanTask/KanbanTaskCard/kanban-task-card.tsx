import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TaskEntity } from "@/shared/tasks/types/task.entity";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { FaTrash } from "react-icons/fa";

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
    return (
      <div
        ref={setNodeRef}
        style={style}
        className=" shadow-none rounded-none "
      ></div>
    );
  }

  return (
    <Card
      className="rounded-none"
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      {...props}
    >
      <CardHeader className="flex justify-between items-center gap-4">
        <CardTitle className="font-normal text-base">{task.name}</CardTitle>
        <FaTrash onClick={() => deleteTask(task.id)} />
      </CardHeader>
    </Card>
  );
}
