import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqEntity } from "@/shared/ui/types/faq.entity";
import React from "react";

interface FaqAccordionProps {
  faq: FaqEntity;
}

export function FaqAccordion({ faq }: FaqAccordionProps) {
  return (
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger className="min-w-96">{faq.question}</AccordionTrigger>
        <AccordionContent className="min-w-96">
          <p>{faq.answer}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
