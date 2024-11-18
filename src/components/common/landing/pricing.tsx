import { PricingCard } from "@/components/common/landing/pricing-card";
import { Container } from "@/components/ui/container.component";
import { usePlans } from "@/shared/ui/hooks/plans.hook";
import { useTranslations } from "next-intl";
import React from "react";

export function Pricing() {
  const t = useTranslations("index");
  const plans = usePlans();

  return (
    <Container className="py-24 overflow-x-clip text-center">
      <Container className="container">
        <h1 className="text-5xl font-medium" id="pricing">
          {t("landing-page.pricing.title")}
        </h1>
        <Container className="flex flex-col lg:flex-row justify-center gap-4 w-full mt-10 p-4">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </Container>
      </Container>
    </Container>
  );
}
