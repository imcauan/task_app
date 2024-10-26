import {
  DashboardCard,
  DashboardCardProps,
} from "@/app/dashboard/_components/DashboardCard/DashboardCard";
import { UserEntity } from "@/shared/user/types/user.entity";

interface DashboardCarouselProps extends React.ComponentProps<"div"> {
  user?: UserEntity;
  cardData?: DashboardCardProps[];
}

export function DashboardCarousel({
  user,
  cardData,
  ...props
}: DashboardCarouselProps) {
  return (
    <div className="hidden lg:flex  w-full items-center gap-4" {...props}>
      {cardData?.map((card) => (
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
