import { FaqAccordion } from "@/components/common/landing/faq-accordion";
import { Container } from "@/components/ui/container.component";
import { useFaq } from "@/shared/ui/hooks/faq.hook";
import React from "react";

export function Faq() {
  const faqs = useFaq();
  return (
    <Container className="py-48 overflow-x-clip text-center">
      <h1 className="text-5xl font-medium" id="faqs">
        FAQs
      </h1>
      <Container className="flex flex-col gap-6 mt-10">
        {faqs.map((faq) => (
          <FaqAccordion key={faq.question} faq={faq} />
        ))}
      </Container>
    </Container>
  );
}
