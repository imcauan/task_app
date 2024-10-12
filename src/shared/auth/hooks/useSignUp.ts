import { api } from "@/services/api";
import { TokenService } from "@/services/token";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { TAccessToken } from "../types/TAccessToken";
import {
  createStripeCustomer,
  getCustomerSubscription,
} from "@/services/stripe";
import { useUpdateUserStripe } from "@/shared/user/hooks/update-user-stripe.hook";
import { config } from "@/config";

export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
  workspaceId?: string;
}

export function useSignUp() {
  const router = useRouter();
  const { UpdateUserStripeFn } = useUpdateUserStripe();
  const signUpFn = async (data: SignUpRequest) => {
    const { data: response } = await api.post<TAccessToken>(
      "/auth/signup",
      data
    );

    const createdCustomer = await createStripeCustomer({
      name: data.name,
      email: data.email,
    });

    const customerSubscription = await getCustomerSubscription(
      createdCustomer.id
    );

    await UpdateUserStripeFn({
      email: data.email,
      stripePriceId: config.stripe.plans.free.priceId,
      stripeCustomerId: createdCustomer.id,
      stripeSubscriptionId: customerSubscription.data[0].id,
      stripeSubscriptionStatus: customerSubscription.data[0].status,
    });

    TokenService.saveAccessToken(response.token);
  };

  return useMutation({
    mutationFn: signUpFn,
    onSuccess: () => {
      router.push("/dashboard");
    },
    onError(error) {
      console.log(error);
    },
  });
}

// TODO: create separated method to invite users.
// const { data: response } = await api.post<TAccessToken>(
//   "auth/signup/invite",
//   data
// );
// TokenService.saveAccessToken(response.token);

// await createStripeCustomer({
//   name: data.name,
//   email: data.email,
// });
