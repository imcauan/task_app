import React from "react";
import { FaMoon, FaSun, FaTasks } from "react-icons/fa";
import { LandingPageLinks } from "@/components/common/landing-page/landing-page-links/landing-page-links";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface LandingPageHeaderProps extends React.ComponentProps<"header"> {
  theme: string | undefined;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export function LandingPageHeader({
  theme,
  setTheme,
  ...props
}: LandingPageHeaderProps) {
  return (
    <header className="w-full h-10 flex px-12 mt-10" {...props}>
      <div className="flex w-full h-full items-center gap-8">
        <div className="flex gap-2 items-center p-4 text-2xl">
          <FaTasks />
          <p className="font-semibold">TaskApp</p>
        </div>
        <LandingPageLinks />
      </div>
    </header>
  );
}
