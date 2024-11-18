import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container.component";
import { PlanEntity } from "@/shared/ui/types/plan.entity";
import { useTranslations } from "next-intl";
import React from "react";
import { FaCheck } from "react-icons/fa";

interface PricingCardProps {
  plan: PlanEntity;
}

export function PricingCard({ plan }: PricingCardProps) {
  const t = useTranslations("index");
  return (
    <Card className="rounded-xl relative flex flex-col justify-center items-center p-6 min-w-96">
      <BorderBeam colorFrom="#fbbf24" colorTo="#4f46e5" borderWidth={2} />
      <CardHeader>
        <CardTitle className="text-xl">{plan.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <Container>
          <h1 className="font-semibold text-6xl bg-gradient-to-r from-amber-400 to-indigo-600 bg-clip-text text-transparent">
            ${plan.pricing}
          </h1>
          <p className="text-black/50 dark:text-white/30 text-sm">
            {t("landing-page.pricing.billed")}
          </p>
          <Container className="mt-6">
            {plan.features.map((feature) => (
              <p
                key={feature}
                className="flex items-center gap-3 text-black/50 dark:text-white/30 text-base"
              >
                <FaCheck />
                {feature}
              </p>
            ))}
          </Container>
          <Button className="mt-10 bg-gradient-to-r from-amber-400 to-indigo-600 w-full p-3 text-white">
            {t("landing-page.pricing.cta")}
          </Button>
        </Container>
      </CardContent>
    </Card>
  );
}
