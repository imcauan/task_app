import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

interface LandingPageMainProps extends React.ComponentProps<"div"> {}

export function LandingPageMain({ ...props }: LandingPageMainProps) {
  const t = useTranslations("index");
  return (
    <div
      className="flex justify-center h-full items-center w-full px-14"
      {...props}
    >
      <div className="flex flex-col gap-4 text-left">
        <h1 className="text-4xl lg:text-4xl font-bold">
          {t("landing-page.title")}
        </h1>
        <p className="font-normal text-xl lg:text-xl text-left break-normal text-neutral-400 dark:text-neutral-700">
          {t("landing-page.description")}
        </p>
        <Link
          href={"/login"}
          className="bg-black dark:bg-white text-white dark:text-black p-3 w-32 font-medium text-base text-center rounded flex items-center gap-3"
        >
          <FaArrowRight />
          {t("landing-page.try-now")}
        </Link>
      </div>
    </div>
  );
}
