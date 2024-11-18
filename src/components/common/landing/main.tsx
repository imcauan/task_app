import { Container } from "@/components/ui/container.component";
import { useTranslations } from "next-intl";

export function Main() {
  const t = useTranslations("index");
  return (
    <section className="py-24 overflow-x-clip">
      <Container className="container text-center">
        <Container className="inline-flex bg-gradient-to-r text-white from-amber-400 to-indigo-600 p-2 rounded-full font-bold">
          {t("landing-page.hero.highlight")}
        </Container>
        <h1 className="text-5xl md:text-6xl font-medium text-center mt-6">
          {t("landing-page.hero.title")}
        </h1>
        <p className="text-black/50 p-4 text-center dark:text-white/30 text-xl mt-4 max-w-4xl">
          {t("landing-page.hero.description")}
        </p>
      </Container>
    </section>
  );
}
