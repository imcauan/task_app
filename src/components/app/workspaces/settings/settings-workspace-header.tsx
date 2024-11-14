import { Container } from "@/components/ui/container.component";
import { Title } from "@/components/ui/title.component";
import { useTranslations } from "next-intl";
import React from "react";

export default function SettingsWorkspaceHeader() {
  const t = useTranslations("index");
  return (
    <Container className="w-full flex flex-col">
      <Title
        text={t("workspace.settings.title")}
        className="text-2xl font-semibold"
      />
    </Container>
  );
}
