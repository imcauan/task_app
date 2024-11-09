"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container.component";

interface SwitchLanguageProps {
  locale: string;
}

export function SwitchLanguage({ locale }: SwitchLanguageProps) {
  const router = useRouter();
  const locales = [
    {
      label: "English",
      flag: "us",
      value: "en",
    },
    {
      label: "Brazilian Portuguese",
      flag: "br",
      value: "pt",
    },
  ];

  const currentLocale = locales.find((l) => l.value === locale);

  function handleChangeLanguage(value: string) {
    router.replace(`/${value}`);
    return router.refresh();
  }

  return (
    <Select onValueChange={handleChangeLanguage}>
      <SelectTrigger className="border-none shadow-none">
        <Image
          src={`/${currentLocale?.label === "English" ? "usa" : "brazil"}.png`}
          alt="country flag"
          width={20}
          height={20}
        />
      </SelectTrigger>
      <SelectContent className="dark:bg-neutral-800 dark:hover:bg-neutral-900">
        {locales.map((locale) => (
          <SelectItem
            key={locale.value}
            value={locale.value}
            className="flex w-full"
          >
            <Container className="flex items-center gap-2 w-full ">
              <Image
                src={`/${locale.value === "en" ? "usa" : "brazil"}.png`}
                alt="country flag"
                width={20}
                height={20}
              />
              <p>{locale.label}</p>
            </Container>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
