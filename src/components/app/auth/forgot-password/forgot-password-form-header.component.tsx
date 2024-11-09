import { Container } from "@/components/ui/container.component";
import { useTranslations } from "next-intl";

export function ForgotPasswordFormHeader() {
  const t = useTranslations("index");

  return (
    <Container className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-semibold">{t("forgot-password.title")}</h1>
      <p className="text-sm text-center font-normal">
        {t("forgot-password.description")}
      </p>
    </Container>
  );
}
