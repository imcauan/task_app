import { plans } from "@/components/common/landing-page/landing-page-pricing/plans";
import { LandingPagePricingCard } from "../landing-page-pricing-card/landing-page-pricing-card";
import Link from "next/link";

export function LandingPagePricing() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col text-center">
        <h1 className="text-3xl font-semibold">
          And all the benefits are really closer to you.
        </h1>
        <p>Choose the best plan for your business.</p>
      </div>
      <div className="flex w-full gap-3 justify-center mt-6">
        {plans.map((plan) => (
          <LandingPagePricingCard plan={plan} key={plan.name} />
        ))}
      </div>
      <Link
        className="bg-black dark:bg-white p-3 mt-3 text-white dark:text-black font-semibold"
        href={"/login"}
      >
        Would you like to tryout? Click here.
      </Link>
    </div>
  );
}
