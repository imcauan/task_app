"use client";

import { LandingPageFooter } from "@/components/common/landing-page/landing-page-footer/landing-page-footer";
import { LandingPageHeader } from "@/components/common/landing-page/landing-page-header/landing-page-header";
import { LandingPageMain } from "@/components/common/landing-page/landing-page-main/landing-page-main";
import { LandingPagePricing } from "@/components/common/landing-page/landing-page-pricing/landing-page-pricing";
import { LandingPageSection } from "@/components/common/landing-page/landing-page-section/landing-page-section";
import { sections } from "@/components/common/landing-page/landing-page-section/section";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full flex flex-col bg-white dark:bg-black">
      <LandingPageHeader theme={theme} setTheme={setTheme} />
      <div className="w-full flex flex-col gap-36">
        <LandingPageMain />
        <div className="lg:px-36 flex flex-col gap-36">
          {sections.map((section, index) => (
            <LandingPageSection
              key={index}
              title={section.title}
              subtitle={section.subtitle}
              image={section.image}
            />
          ))}
        </div>
        <LandingPagePricing />
      </div>
      <LandingPageFooter />
    </div>
  );
}
