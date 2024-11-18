import React from "react";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/ui/logo.component";
import { Container } from "@/components/ui/container.component";

export interface FooterProps extends React.ComponentProps<"footer"> {}

export function Footer({ ...props }: FooterProps) {
  const t = useTranslations("index");

  return (
    <footer
      className="w-full p-4 mt-10 flex flex-col items-center space-y-4"
      {...props}
    >
      <Separator />
      <Container className="flex items-center">
        <Logo withName />
        <p>{t("landing-page.footer.made-by")}</p>
      </Container>
    </footer>
  );
}
