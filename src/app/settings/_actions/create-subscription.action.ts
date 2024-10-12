import { createCheckoutSession } from "@/services/stripe";
import { UserEntity } from "@/shared/user/interfaces/UserEntity";
import { redirect } from "next/navigation";

export function useCreateCheckoutAction() {
  const CreateCheckoutAction = async (user: UserEntity) => {
    if (!user) {
      console.log("Not authorized.");
      return null;
    }

    console.log(`stripeSubscriptionId: ${user.stripeSubscriptionId}`);

    const checkoutSession = await createCheckoutSession(
      user.id,
      user.email,
      user.stripeSubscriptionId as string
    );

    if (!checkoutSession.url) return;
    console.log(checkoutSession.url);
    redirect(checkoutSession.url);
  };

  return { CreateCheckoutAction };
}
