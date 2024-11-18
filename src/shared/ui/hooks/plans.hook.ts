import { PlanEntity } from "@/shared/ui/types/plan.entity";
import { useTranslations } from "next-intl";

export function usePlans() {
  const t = useTranslations("index");
  const plans: PlanEntity[] = [
    {
      name: "Free",
      pricing: 0,
      features: [
        t("landing-page.pricing.free.workspaces"),
        t("landing-page.pricing.free.chats"),
        t("landing-page.pricing.free.tasks"),
      ],
    },
    {
      name: "Pro",
      pricing: 19,
      features: [
        t("landing-page.pricing.pro.workspaces"),
        t("landing-page.pricing.pro.chats"),
        t("landing-page.pricing.pro.tasks"),
      ],
    },
  ];

  return plans;
}
