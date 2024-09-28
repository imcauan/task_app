"use client";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { TaskEntity } from "@/shared/tasks/interfaces/TaskEntity";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { TaskCarouselCard } from "./TaskCarouselCard/TaskCarouselCard";
import { useFinishTask } from "@/shared/tasks/hooks/useFinishTask";

interface TaskCarouselProps {
  tasks: TaskEntity[];
}

export function TaskCarousel({ tasks }: TaskCarouselProps) {
  const { mutateAsync: FinishTaskFn } = useFinishTask();
  return (
    <Carousel
      className="flex max-w-full items-center"
      orientation="vertical"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className="flex max-w-lg gap-6 p-4 max-h-40 items-center">
        {tasks.map((task) => (
          <TaskCarouselCard
            key={task.id}
            task={task}
            finishTaskFn={FinishTaskFn}
          />
        ))}
      </CarouselContent>
    </Carousel>
  );
}
