import { FeatureEntity } from "@/shared/ui/types/features.entity";
import { FaTasks } from "react-icons/fa";
import { LuKanban } from "react-icons/lu";
import { CiChat1 } from "react-icons/ci";
import { useTranslations } from "next-intl";

export function useFeatures() {
  const t = useTranslations("index");
  const features: FeatureEntity[] = [
    {
      icon: LuKanban,
      name: t("landing-page.features.kanban.title"),
      description: t("landing-page.features.kanban.description"),
      className: "",
    },
    {
      icon: FaTasks,
      name: t("landing-page.features.task.title"),
      description: t("landing-page.features.task.description"),
      className: "",
    },
    {
      icon: CiChat1,
      name: t("landing-page.features.chat.title"),
      description: t("landing-page.features.chat.description"),
      className: "",
    },
  ];

  return features;
}
