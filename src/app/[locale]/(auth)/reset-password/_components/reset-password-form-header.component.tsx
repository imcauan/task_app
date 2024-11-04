import { Container } from "@/components/common/Container/container.component";
import { useTranslations } from "next-intl";

export function ResetPasswordFormHeader() {
  const t = useTranslations("index");
  return (
    <Container className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-semibold">{t("reset-password.title")}</h1>
      <p className="text-sm text-justify font-normal">
        {t("reset-password.description")}
      </p>
    </Container>
  );
}
