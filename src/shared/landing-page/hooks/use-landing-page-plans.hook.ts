import { useTranslations } from "next-intl";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

export interface PlanEntity {
  name: string;
  price: number;
  description: string;
  features: FeatureProps[];
}

interface FeatureProps {
  name: string;
  icon: IconType;
}

export function useLandingPagePlans() {
  const t = useTranslations("index");
  const plans: PlanEntity[] = [
    {
      name: t("landing-page.plans.free-plan.title"),
      description: t("landing-page.plans.free-plan.description"),
      price: 0,
      features: [
        {
          name: t("landing-page.plans.free-plan.benefits.workspace"),
          icon: FaX,
        },
        {
          name: t("landing-page.plans.free-plan.benefits.dashboard"),
          icon: FaX,
        },
        { name: t("landing-page.plans.free-plan.benefits.chats"), icon: FaX },
      ],
    },
    {
      name: t("landing-page.plans.pro-plan.title"),
      description: t("landing-page.plans.pro-plan.description"),
      price: 29,
      features: [
        {
          name: t("landing-page.plans.pro-plan.benefits.workspace"),
          icon: FaCheck,
        },
        {
          name: t("landing-page.plans.pro-plan.benefits.dashboard"),
          icon: FaCheck,
        },
        {
          name: t("landing-page.plans.pro-plan.benefits.chats"),
          icon: FaCheck,
        },
      ],
    },
  ];

  return plans;
}
