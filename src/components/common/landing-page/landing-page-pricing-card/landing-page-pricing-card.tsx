import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { PlanEntity } from "../landing-page-pricing/plans";

interface LandingPagePricingCardProps extends React.ComponentProps<"div"> {
  plan: PlanEntity;
}

export function LandingPagePricingCard({
  plan,
  ...props
}: LandingPagePricingCardProps) {
  return (
    <Card className="h-60 p-4 shadow-none rounded-none" {...props}>
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
      </div>
    </Card>
  );
}
