import { Container } from "@/components/ui/container.component";
import { Logo } from "@/components/ui/logo.component";
import { SwitchLanguage } from "@/components/ui/switch-language.component";
import { SwitchTheme } from "@/components/ui/switch-theme.component";
import { useNavLinks } from "@/shared/ui/hooks/nav-links.hook";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export function Header() {
  const locale = useLocale();
  const links = useNavLinks();
  const t = useTranslations("index");

  return (
    <section className="py-4 px-4 lg:py-8 flex justify-center w-full relative">
      <Container className="container max-w-5xl">
        <Container className="flex justify-between border dark:border-white/15 rounded-full p-2 md:pr-2 items-center">
          <Logo withName />
          <Container className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.text}
              </Link>
            ))}
          </Container>
          <Container className="flex items-center gap-3 pr-4">
            <SwitchTheme />
            <SwitchLanguage locale={locale} />
            <Link
              href={`/${locale}/register`}
              className="bg-gradient-to-r from-amber-400 to-indigo-600 p-2 rounded-full text-white"
            >
              {t("landing-page.nav.sign-up")}
            </Link>
          </Container>
        </Container>
      </Container>
    </section>
  );
}
