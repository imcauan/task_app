import { api } from "@/services/api";
import { CheckoutSessionResponse } from "@/shared/checkout/types/checkout-session-response.type";
import { CreateCheckoutSessionRequest } from "@/shared/checkout/types/create-checkout-session-request.interface";
import { redirect } from "next/navigation";

export function useCreateCheckoutAction() {
  const CreateCheckoutAction = async (data: CreateCheckoutSessionRequest) => {
    const checkoutSession = await api
      .post<CheckoutSessionResponse>("stripe/subscription", data)
      .then((res) => res.data);

    if (!checkoutSession.url) return;
    console.log(checkoutSession.url);
    redirect(checkoutSession.url);
  };

  return { CreateCheckoutAction };
}
