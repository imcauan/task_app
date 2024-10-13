import { api } from "@/services/api";
import { UserEntity } from "@/shared/user/types/user.entity";
import { GetUserByStripeDataRequest } from "@/shared/user/types/get-user-by-stripe-data-request.interface";

//TODO: verify if it's not useless.

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
