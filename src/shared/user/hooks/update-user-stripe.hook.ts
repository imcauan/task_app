import { api } from "@/services/api";
import { useQueryClient } from "@tanstack/react-query";

interface UpdateUserStripeRequest {
  email: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  stripePriceId?: string;
  stripeSubscriptionStatus?: string;
}

export function useUpdateUserStripe() {
  const UpdateUserStripeFn = async (data: UpdateUserStripeRequest) => {
    const { data: response } = await api.patch(
      `users/stripe/${data.email}`,
      data
    );

    return response;
  };

  return { UpdateUserStripeFn };
}
