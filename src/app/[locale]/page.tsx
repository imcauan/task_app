import { LandingPageFooter } from "@/components/common/landing-page/landing-page-footer";
import { LandingPageMain } from "@/components/common/landing-page/landing-page-main";

import React from "react";

export default async function Home() {
  return (
    <div className="w-full flex flex-col bg-white dark:bg-black">
      <div className="flex w-full h-screen">
        <div className="flex flex-col w-full">
          <LandingPageMain />
        </div>
      </div>
      <div className="flex h-screen items-center"></div>
      <LandingPageFooter />
    </div>
  );
}
