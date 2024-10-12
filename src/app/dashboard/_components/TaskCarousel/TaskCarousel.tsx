"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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
      orientation="horizontal"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className="flex min-w-72 gap-6 max-h-40 items-center">
        {tasks.map((task) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <TaskCarouselCard
              key={task.id}
              task={task}
              finishTaskFn={FinishTaskFn}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
