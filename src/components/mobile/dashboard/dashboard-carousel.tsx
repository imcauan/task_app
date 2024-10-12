import {
  DashboardCard,
  DashboardCardProps,
} from "@/app/dashboard/_components/DashboardCard/DashboardCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TaskEntity } from "@/shared/tasks/interfaces/TaskEntity";
import { UserEntity } from "@/shared/user/interfaces/UserEntity";
import { FaCheck, FaPlus } from "react-icons/fa";

interface DashboardCarouselProps extends React.ComponentProps<"div"> {
  user?: UserEntity;
  completedTasks: TaskEntity[] | undefined;
}

export function DashboardCarousel({
  user,
  completedTasks,
  ...props
}: DashboardCarouselProps) {
  const cardData: DashboardCardProps[] = [
    {
      icon: FaCheck,
      title: "Completed tasks.",
      number: completedTasks?.length!,
    },
    {
      icon: FaPlus,
      title: "New tasks.",
      number: user?.tasks?.length!,
    },
  ];

  return (
    <div className="hidden lg:flex  w-full items-center gap-4" {...props}>
      {cardData.map((card) => (
        <DashboardCard
          key={card.title}
          title={card.title}
          number={card.number}
          icon={card.icon}
        />
      ))}
    </div>
  );
}
