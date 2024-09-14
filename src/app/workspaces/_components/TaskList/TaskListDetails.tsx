import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TaskEntity } from "@/entities/TaskEntity";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

interface TaskListDetailsProps {
  task: TaskEntity;
}

export function TaskListDetails({ task }: TaskListDetailsProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <HiOutlineDotsVertical />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{task.name}</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
