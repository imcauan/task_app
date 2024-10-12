import { PlanEntity } from "@/components/common/landing-page/landing-page-pricing/plans";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { UserEntity } from "@/shared/user/interfaces/UserEntity";
import { features } from "process";
import { SubscriptionButton } from "./subscription-button";
import { useCreateSubscription } from "@/shared/subscriptions/hooks/create-subscription.hook";

interface SubscriptionCardProps extends React.ComponentProps<"div"> {
  plan: PlanEntity;
  user: UserEntity;
}

export function SubscriptionCard({
  plan,
  user,
  ...props
}: SubscriptionCardProps) {
  const { mutate: CreateSubscriptionFn } = useCreateSubscription();

  return (
    <Card className="h-80 p-4 shadow-none rounded-none" {...props}>
      <CardHeader className="w-full flex flex-col text-center">
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <p>{plan.description}</p>
        <p className="text-xl font-semibold">${plan.price.toFixed(2)}</p>
      </CardHeader>
      <div className="flex flex-col items-center">
        {plan.features.map((feature) => (
          <div
            key={feature.name}
            className="flex justify-start items-center gap-2"
          >
            <feature.icon />
            <p className="font-semibold">{feature.name}</p>
          </div>
        ))}
        {plan.name !== "Free" && (
          <SubscriptionButton onClick={() => CreateSubscriptionFn(user.id)} />
        )}
      </div>
    </Card>
  );
}
