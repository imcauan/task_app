"use client";

import { LandingPageFooter } from "@/components/common/landing-page/landing-page-footer/landing-page-footer";
import { LandingPageHeader } from "@/components/common/landing-page/landing-page-header/landing-page-header";
import { LandingPageMain } from "@/components/common/landing-page/landing-page-main/landing-page-main";
import { LandingPagePricing } from "@/components/common/landing-page/landing-page-pricing/landing-page-pricing";
import { useTheme } from "next-themes";
import React from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full flex flex-col bg-white dark:bg-black">
      <div className="flex w-full h-screen">
        <div className="flex flex-col w-1/2">
          <LandingPageHeader theme={theme} setTheme={setTheme} />
          <LandingPageMain />
        </div>
        {/* <div className="w-1/2 bg-black"></div> */}
      </div>
      <div className="flex h-screen items-center">
        <LandingPagePricing />
      </div>
      <LandingPageFooter />
    </div>
  );
}
