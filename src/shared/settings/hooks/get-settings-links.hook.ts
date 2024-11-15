import { LinkEntity } from "@/shared/ui/types/link.entity";
import { useLocale, useTranslations } from "next-intl";
import { FaUser, FaCrown } from "react-icons/fa";

export function useGetSettingsLinks() {
  const t = useTranslations("index");
  const locale = useLocale();
  const settingsLinks: LinkEntity[] = [
    {
      href: `/${locale}/settings/profile`,
      icon: FaUser,
      text: t("settings.profile.title"),
    },
    {
      href: `/${locale}/settings/subscription`,
      icon: FaCrown,
      text: t("settings.subscription.title"),
    },
  ];

  return settingsLinks;
}
