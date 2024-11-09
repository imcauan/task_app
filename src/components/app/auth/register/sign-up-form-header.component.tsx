import { Container } from "@/components/ui/container.component";
import { useTranslations } from "next-intl";

export function SignUpFormHeader() {
  const t = useTranslations("index");

  return (
    <Container className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-semibold">{t("register.title")}</h1>
      <p className="text-base font-normal">{t("register.description")}</p>
    </Container>
  );
}
