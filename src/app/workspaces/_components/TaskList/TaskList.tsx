import { TaskEntity } from "@/entities/TaskEntity";
import { TaskType } from "../TaskType/TaskType";
import { TaskStatus } from "@/enums/task-status.enum";
import { TaskListDetails } from "./TaskListDetails";

export interface TaskListProps {
  tasks: TaskEntity[] | undefined;
  workspaceId: string;
  userId: string;
  title: string;
  type: TaskStatus;
}

export function TaskList({ tasks, ...props }: TaskListProps) {
  const filteredTasks = tasks?.filter((t) => +t.status === props.type);

  return (
    <div className="grid grid-cols-1 gap-2 p-2 place-items-center">
      <TaskType
        title={props.title}
        type={props.type}
        userId={props.userId}
        workspaceId={props.workspaceId}
      />
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
