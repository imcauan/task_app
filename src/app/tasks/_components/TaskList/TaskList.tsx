"use client";

import { TaskType } from "../TaskType/TaskType";
import { TaskStatus } from "@/enums/task-status.enum";
import { TaskEntity } from "@/entities/TaskEntity";
import { TaskListDetails } from "./TaskListDetails";

export interface TaskListProps {
  userId: string;
  title: string;
  type: TaskStatus;
  tasks: TaskEntity[] | null;
}

export function TaskList({ tasks, type, ...props }: TaskListProps) {
  const filteredTasks = tasks?.filter((t) => t.status === type);

  return (
    <div className="grid grid-cols-1 gap-2 p-2 place-items-center">
      <TaskType title={props.title} type={type} userId={props.userId} />
      <div className="flex flex-col gap-2 w-full items-center">
        {filteredTasks?.map((t) => (
          <p className="w-full flex items-center justify-between text-left border rounded-md p-3">
            {t.name}
            <TaskListDetails task={t} />
          </p>
        ))}
      </div>
    </div>
  );
}
