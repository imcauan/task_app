import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { TaskEntity } from "@/entities/TaskEntity";
import { UseMutateAsyncFunction } from "@tanstack/react-query";
import React from "react";

interface TaskCarouselCardProps {
  task: TaskEntity;
  finishTaskFn: UseMutateAsyncFunction<TaskEntity, Error, string, unknown>;
}

export function TaskCarouselCard({
  task,
  finishTaskFn,
}: TaskCarouselCardProps) {
  const handleFinishTask = async () => {
    await finishTaskFn(task.id);
  };

  return (
    <Card className="p-4 rounded-none min-w-64 grid grid-cols-1 gap-4">
      <CardTitle className="text-sm font-normal dark:text-white">
        {task.name}
      </CardTitle>
      <CardContent className="">
        <div className="w-full flex justify-end items-center">
          <Button
            className="hover:bg-transparent hover:text-black shadow-none"
            onClick={handleFinishTask}
          >
            Finish
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
