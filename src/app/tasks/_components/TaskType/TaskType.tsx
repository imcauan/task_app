import { TaskStatus } from "@/shared/tasks/enums/task-status.enum";
import React, { SetStateAction } from "react";
import { CreateTaskDialog } from "../CreateTaskDialog/CreateTaskDialog";
import { FaEye, FaEyeSlash } from "react-icons/fa";
interface TaskTypeProps extends React.ComponentProps<"div"> {
  title: string;
  type: TaskStatus;
  setCanOpen: React.Dispatch<SetStateAction<boolean>>;
  canOpen: boolean;
  userId: string;
}

export function TaskType({
  title,
  canOpen,
  setCanOpen,
  ...props
}: TaskTypeProps) {
  return (
    <div className="flex min-w-64 items-center justify-between p-3 border gap-2">
      <h1>{title}</h1>
      <div className="flex items-center gap-2 cursor-pointer">
        {canOpen ? (
          <FaEye onClick={() => setCanOpen(!canOpen)} />
        ) : (
          <FaEyeSlash onClick={() => setCanOpen(!canOpen)} />
        )}
        {props.type === TaskStatus.TODO && (
          <CreateTaskDialog userId={props.userId} />
        )}
      </div>
    </div>
  );
}
