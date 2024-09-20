"use client";

import { TaskType } from "../TaskType/TaskType";
import { TaskStatus } from "@/shared/tasks/enums/task-status.enum";
import { TaskEntity } from "@/shared/tasks/interfaces/TaskEntity";
import { TaskListDetails } from "./TaskListDetails";
import React from "react";

export interface TaskListProps {
  userId: string;
  title: string;
  type: TaskStatus;
  tasks: TaskEntity[] | null;
}

export function TaskList({ tasks, type, ...props }: TaskListProps) {
  const [canOpen, setCanOpen] = React.useState<boolean>(true);
  const filteredTasks = tasks?.filter((t) => t.status === type);

  return (
    <div className="flex flex-col gap-2 p-2 place-items-center">
      <TaskType
        title={props.title}
        type={type}
        userId={props.userId}
        canOpen={canOpen}
        setCanOpen={setCanOpen}
      />
      <div className="flex flex-col gap-2 w-full items-center">
        {canOpen &&
          filteredTasks?.map((t) => (
            <p className="w-full flex items-center justify-between text-left border rounded-md p-3 max-w-64">
              {t.name}
              <TaskListDetails task={t} />
            </p>
          ))}
      </div>
    </div>
  );
}
