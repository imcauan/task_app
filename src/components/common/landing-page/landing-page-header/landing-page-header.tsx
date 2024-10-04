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
    <header
      className="w-full h-10 flex flex-col p-8 gap-3 items-center"
      {...props}
    >
      <div className="flex w-full justify-between">
        <div className="flex gap-2 items-center px-2 text-xl">
          <FaTasks />
          <p className="font-semibold">TaskApp</p>
        </div>
        <LandingPageLinks />
        <div className="flex gap-3 w-25">
          <Button
            className="bg-transparent text-black dark:text-white hover:bg-transparent shadow-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </header>
  );
}
