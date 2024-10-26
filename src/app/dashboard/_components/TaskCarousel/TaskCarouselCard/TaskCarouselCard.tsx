import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { TaskEntity } from "@/shared/tasks/types/task.entity";
import React from "react";
import { TaskHasWorkspace } from "./TaskHasWorkspace";

interface TaskCarouselCardProps {
  task: TaskEntity;
}

export function TaskCarouselCard({ task }: TaskCarouselCardProps) {
  return (
    <Card className="p-4 rounded-none w-full h-32 grid grid-cols-1 gap-4">
      <CardTitle className="text-sm font-normal dark:text-white">
        {task.name}
        {task.workspaceId && (
          <TaskHasWorkspace workspaceId={task.workspaceId} />
        )}
      </CardTitle>
      <CardContent className="">
        <div className="w-full flex justify-end items-center">
          <Button className="hover:bg-transparent hover:text-black shadow-none rounded-none">
            Finish
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
