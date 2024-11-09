import React from "react";
import { Card } from "@/components/ui/card";

interface LandingPagePricingCardProps extends React.ComponentProps<"div"> {}

export function LandingPagePricingCard({
  ...props
}: LandingPagePricingCardProps) {
  return <Card className="h-80 p-4 shadow-none rounded-none" {...props}></Card>;
}
