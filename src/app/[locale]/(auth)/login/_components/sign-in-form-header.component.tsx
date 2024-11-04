import { Container } from "@/components/common/Container/container.component";
import { useTranslations } from "next-intl";

export function SignInFormHeader() {
  const t = useTranslations("index");
  return (
    <Container className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-semibold">{t("login.title")}</h1>
      <p className="text-base font-normal">{t("login.description")}</p>
    </Container>
  );
}
