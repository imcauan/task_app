import Link from "next/link";
import { useTranslations } from "next-intl";

export function LandingPagePricing() {
  const t = useTranslations("index");

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col text-center">
        <h1 className="text-3xl font-semibold">
          {t("landing-page.plans.title")}
        </h1>
        <p>{t("landing-page.plans.description")}</p>
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
