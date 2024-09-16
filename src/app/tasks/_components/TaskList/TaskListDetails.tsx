import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TaskEntity } from "@/entities/TaskEntity";
import { TaskStatus } from "@/enums/task-status.enum";
import { useDeleteTask } from "@/hooks/tasks/useDeleteTask";
import { useFinishTask } from "@/hooks/tasks/useFinishTask";
import { useStartTask } from "@/hooks/tasks/useStartTask";
import { useGetUserById } from "@/hooks/user/useGetUserById";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

interface TaskListDetailsProps {
  task: TaskEntity;
}

export function TaskListDetails({ task }: TaskListDetailsProps) {
  const { mutateAsync: StartTaskFn } = useStartTask();
  const { mutateAsync: DeleteTaskFn } = useDeleteTask();
  const { mutateAsync: FinishTaskFn } = useFinishTask();

  const handleStartTask = async () => {
    await StartTaskFn({
      taskId: task.id,
      status: TaskStatus.ON_PROGRESS,
    });
  };

  const handleDeleteTask = async () => {
    await DeleteTaskFn(task.id);
  };

  const handleFinishTask = async () => {
    await FinishTaskFn(task.id);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <HiOutlineDotsVertical />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{task.name}</DialogTitle>
        </DialogHeader>
        <p className="text-base">{task.description}</p>
        <div className="w-full flex justify-end gap-4">
          <DialogClose>
            <Button variant={"outline"} onClick={handleDeleteTask}>
              Delete
            </Button>
          </DialogClose>
          <DialogClose>
            <Button
              onClick={
                task.status === TaskStatus.TODO
                  ? handleStartTask
                  : handleFinishTask
              }
            >
              {task.status === TaskStatus.TODO ? "Start" : "Finish"}
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
