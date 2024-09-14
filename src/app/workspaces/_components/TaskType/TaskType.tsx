import { TaskStatus } from "@/enums/task-status.enum";
import React from "react";
import { CreateTaskDialog } from "../CreateTaskDialog/CreateTaskDialog";

interface TaskTypeProps extends React.ComponentProps<"div"> {
  title: string;
  type: TaskStatus;
  workspaceId: string;
  userId: string;
}

export function TaskType({ title, ...props }: TaskTypeProps) {
  return (
    <div className="flex min-w-64 items-center justify-between p-3 border gap-2">
      <h1>{title}</h1>
      {props.type === TaskStatus.TODO && (
        <CreateTaskDialog
          userId={props.userId}
          workspaceId={props.workspaceId}
        />
      )}
    </div>
  );
}
