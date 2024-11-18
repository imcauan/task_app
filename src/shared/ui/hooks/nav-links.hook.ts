import { LinkEntity } from "@/shared/ui/types/link.entity";
import { useTranslations } from "next-intl";

export function useNavLinks() {
  const t = useTranslations("index");
  const links: LinkEntity[] = [
    {
      text: t("landing-page.nav.home"),
      href: "#home",
    },
    {
      text: t("landing-page.nav.features"),
      href: "#features",
    },
    {
      text: t("landing-page.nav.pricing"),
      href: "#pricing",
    },
    {
      text: t("landing-page.nav.faqs"),
      href: "#faqs",
    },
  ];

  return links;
}
