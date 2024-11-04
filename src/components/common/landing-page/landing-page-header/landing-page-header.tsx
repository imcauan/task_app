import React from "react";
import { LandingPageLinks } from "@/components/common/landing-page/landing-page-links/landing-page-links";
import { SwitchLanguage } from "@/components/common/landing-page/landing-page-header/switch-language.component";
import { useLocale } from "next-intl";
import { SwitchTheme } from "@/components/common/landing-page/landing-page-header/switch-theme.component";
import { Logo } from "@/components/common/Logo/logo.component";
import { Container } from "@/components/common/Container/container.component";

interface LandingPageHeaderProps extends React.ComponentProps<"header"> {
  theme: string | undefined;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export function LandingPageHeader({
  theme,
  setTheme,
  ...props
}: LandingPageHeaderProps) {
  const locale = useLocale();
  return (
    <header
      className="w-full h-10 flex px-12 mt-10 justify-between "
      {...props}
    >
      <Container className="flex w-full h-full justify-between items-center gap-8">
        <Logo />
        <LandingPageLinks />
        <Container className="flex items-center gap-3">
          <SwitchTheme />
          <SwitchLanguage locale={locale} />
        </Container>
      </Container>
    </header>
  );
}
