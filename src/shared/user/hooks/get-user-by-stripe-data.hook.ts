import { api } from "@/services/api";
import { UserEntity } from "../interfaces/UserEntity";

interface GetUserByStripeDataRequest {
  stripeCustomerId: string;
  stripeSubscriptionId: string;
}

export function useGetUserByStripeData() {
  const GetUserByStripeDataFn = async (data: GetUserByStripeDataRequest) => {
    try {
      const { data: response } = await api.get<UserEntity>(
        `users/stripe/${data.stripeCustomerId}/${data.stripeSubscriptionId}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return { GetUserByStripeDataFn };
}
