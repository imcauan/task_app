import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TaskEntity } from "@/shared/tasks/types/task.entity";
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
  return (
    <Card {...props} className="shadow-sm rounded-none">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="font-normal text-base">{task.name}</CardTitle>
        <FaTrash onClick={() => deleteTask(task.id)} />
      </CardHeader>
    </Card>
  );
}
