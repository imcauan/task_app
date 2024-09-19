"use client";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { TaskEntity } from "@/entities/TaskEntity";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { TaskCarouselCard } from "./TaskCarouselCard/TaskCarouselCard";
import { useFinishTask } from "@/hooks/tasks/useFinishTask";

interface TaskCarouselProps {
  tasks: TaskEntity[];
}

export function TaskCarousel({ tasks }: TaskCarouselProps) {
  const { mutateAsync: FinishTaskFn } = useFinishTask();
  return (
    <Carousel
      className="flex max-w-full"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className="flex max-w-xl gap-4 px-4">
        {tasks.map((task) => (
          <TaskCarouselCard task={task} finishTaskFn={FinishTaskFn} />
        ))}
      </CarouselContent>
    </Carousel>
  );
}
