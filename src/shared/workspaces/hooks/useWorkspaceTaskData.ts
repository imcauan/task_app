import { useUser } from "@/shared/auth/hooks/useUser";
import { useGetWorkspaceById } from "./useGetWorkspaceById";
import { TaskStatus } from "@/shared/tasks/enums/task-status.enum";
import { TaskEntity } from "@/shared/tasks/interfaces/TaskEntity";

export type TTaskData = {
  title: string;
  type: TaskStatus;
  tasks: TaskEntity[];
  userId: string;
};

export function useWorkspaceTaskData(id: string) {
  const { data: workspace } = useGetWorkspaceById(id);
  const { data: user } = useUser();

  return [
    {
      tasks: workspace?.tasks || [],
      title: "To-do",
      type: TaskStatus.TODO,
      userId: user?.id!,
    },
    {
      tasks:
        workspace?.tasks?.filter((t) => t.status === TaskStatus.ON_PROGRESS) ||
        [],
      title: "On progress",
      type: TaskStatus.ON_PROGRESS,
      userId: user?.id!,
    },
    {
      tasks:
        workspace?.tasks?.filter((t) => t.status === TaskStatus.DONE) || [],
      title: "Finished",
      type: TaskStatus.DONE,
      userId: user?.id!,
    },
  ] as TTaskData[];
}
