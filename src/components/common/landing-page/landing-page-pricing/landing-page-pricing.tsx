import { LandingPagePricingCard } from "@/components/common/landing-page/landing-page-pricing-card/landing-page-pricing-card";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLandingPagePlans } from "@/shared/landing-page/hooks/use-landing-page-plans.hook";

export function LandingPagePricing() {
  const t = useTranslations("index");
  const plans = useLandingPagePlans();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col text-center">
        <h1 className="text-3xl font-semibold">
          {t("landing-page.plans.title")}
        </h1>
        <p>{t("landing-page.plans.description")}</p>
      </div>
      <div className="flex w-full gap-3 justify-center mt-6">
        {plans.map((plan) => (
          <LandingPagePricingCard plan={plan} key={plan.name} />
        ))}
      </div>
      <Link
        className="bg-black dark:bg-white p-3 mt-3 text-white dark:text-black font-semibold"
        href={"/login"}
      >
        {t("landing-page.plans.cta-plans")}
      </Link>
    </div>
  );
}
