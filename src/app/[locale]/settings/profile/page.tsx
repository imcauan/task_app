"use client";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { UpdateUserForm } from "@/components/app/settings/profile/update-user-form";
import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/container.component";
import { Title } from "@/components/ui/title.component";
import { SwitchTheme } from "@/components/ui/switch-theme.component";
import { SwitchLanguage } from "@/components/ui/switch-language.component";

export default function Page() {
  const t = useTranslations("index");
  const locale = useLocale();
  const { theme, setTheme } = useTheme();

  return (
    <Container className="flex flex-col h-full w-full px-10 mt-10 gap-4">
      <Title
        text={t("settings.profile.title")}
        className="text-xl font-semibold"
      />
      <Container className="flex flex-col gap-2">
        <Container className="flex items-center gap-2">
          <Title text={t("settings.profile.theme")} className="text-base" />
          <SwitchTheme />
        </Container>
        <Container className="flex items-center gap-2">
          <Title text={t("settings.profile.language")} className="text-base" />
          <SwitchLanguage locale={locale} />
        </Container>
      </Container>
      <UpdateUserForm />
    </Container>
  );
}
