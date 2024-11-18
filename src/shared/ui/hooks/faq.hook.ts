import { FaqEntity } from "@/shared/ui/types/faq.entity";
import { useTranslations } from "next-intl";

export function useFaq() {
  const t = useTranslations("index");
  const faqs: FaqEntity[] = [
    {
      question: t("landing-page.faqs.what-is.question"),
      answer: t("landing-page.faqs.what-is.answer"),
    },
    {
      question: t("landing-page.faqs.what-is-kanban.question"),
      answer: t("landing-page.faqs.what-is-kanban.answer"),
    },
    {
      question: t("landing-page.faqs.how-does-kanban-work.question"),
      answer: t("landing-page.faqs.how-does-kanban-work.answer"),
    },
  ];

  return faqs;
}
