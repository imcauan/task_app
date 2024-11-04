import { LandingPageLink } from "@/shared/landing-page/types/landing-page-link.type";
import { useTranslations } from "next-intl";

export function useLandingPageLinks() {
  const t = useTranslations("index");
  const links: LandingPageLink[] = [
    {
      text: t("landing-page.header.about"),
      href: "/",
    },
    {
      text: t("landing-page.header.plans"),
      href: "#plans",
    },
  ];

  return links;
}
