"use client";

import { plans } from "@/components/common/landing-page/landing-page-pricing/plans";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";
import { useUser } from "@/shared/auth/hooks/useUser";
import { SubscriptionCard } from "./_components/subscription-card";

export default function Page() {
  const { data: user } = useUser();

  return (
    <div className="w-full h-dvh lg:h-screen flex dark:bg-black">
      <Sidebar />
      <div className="flex flex-col h-full w-full px-10 mt-10 gap-4">
        <h1 className="text-xl font-semibold">Subscriptions</h1>
        <div className="w-full h-full">
          {user?.stripeSubscriptionStatus !== "active" && (
            <>
              <p className="text-center font-semibold text-xl">
                Choose the plan that fits more to your needs.
              </p>
              <div className="w-full flex justify-center gap-3 mt-6">
                {plans.map((plan) => (
                  <SubscriptionCard key={plan.name} plan={plan} user={user!} />
                ))}
              </div>
            </>
          )}
          <h1>{user?.name}, you have an active subscription.</h1>
        </div>
      </div>
    </div>
  );
}
