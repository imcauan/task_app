import { FeatureCard } from "@/components/common/landing/feature-card";
import { Container } from "@/components/ui/container.component";
import { useFeatures } from "@/shared/ui/hooks/features.hook";
import { useLocale, useTranslations } from "next-intl";

export function Feature() {
  const t = useTranslations("index");
  const features = useFeatures();
  return (
    <Container className="py-48 overflow-x-clip text-center ">
      <Container className="container">
        <h1 className="text-5xl font-medium" id="features">
          {t("landing-page.nav.features")}
        </h1>
        <Container className="flex flex-col lg:flex-row gap-4 mt-8 justify-center">
          {features.map((feature) => (
            <FeatureCard key={feature.name} feature={feature} />
          ))}
        </Container>
      </Container>
    </Container>
  );
}
