import { SettingsBarLink } from "@/components/app/settings/settings-bar-link";
import { Container } from "@/components/ui/container.component";
import { useGetSettingsLinks } from "@/shared/settings/hooks/get-settings-links.hook";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export function SettingsBar() {
  const t = useTranslations("index");
  const locale = useLocale();
  const settingsLinks = useGetSettingsLinks();
  return (
    <Container className="flex flex-col gap-4 px-10 lg:border-r min-w-96">
      <Link
        href={`/${locale}/workspaces`}
        className="w-fit rounded-lg flex items-center gap-3 mt-10"
      >
        <FaHome
          className="bg-gradient-to-r from-amber-400 to-indigo-600 p-1 rounded-lg text-white"
          size={25}
        />
        {t("settings.return")}
      </Link>
      <h1 className="text-xl font-semibold mt-10 ">{t("settings.title")}</h1>
      {settingsLinks.map((link) => (
        <SettingsBarLink key={link.text} link={link} href={link.href} />
      ))}
    </Container>
  );
}
