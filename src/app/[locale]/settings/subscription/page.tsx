"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { config } from "@/config";
import { useUser } from "@/shared/auth/hooks/user.hook";
import { useCreateCheckoutAction } from "@/shared/checkout/actions/create-subscription.action";

export default function Page() {
  const { data: user } = useUser();
  const { CreateCheckoutAction } = useCreateCheckoutAction();

  return (
    <div className="flex flex-col h-full w-full px-10 mt-10 gap-4">
      <h1 className="text-xl font-semibold">Subscription</h1>
      <Card className="rounded-none shadow-none p-4">
        <h1>Your current plan, {user?.name}.</h1>
        <p>Expiration: {String(user?.stripeSubscriptionStatus)}</p>
      </Card>
      {user?.stripePriceId === config.stripe.plans.free.priceId && (
        <Card className="rounded-none shadow-none p-4 flex flex-col">
          <h1 className="font-semibold">Your usage of the free plan</h1>
          <div className="flex flex-col gap-2 mt-4">
            <p>Max workspaces: {user?.workspaces.length} of 1</p>
            <form
              action={() =>
                CreateCheckoutAction({
                  userEmail: user?.email!,
                  userStripeSubscriptionId: user?.stripeSubscriptionId,
                })
              }
            >
              <Button type="submit" className="mt-2 rounded-none">
                Upgrade to pro for only $19,00.
              </Button>
            </form>
          </div>
        </Card>
      )}
    </div>
  );
}
