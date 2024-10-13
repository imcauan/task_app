export interface CreateCheckoutSessionRequest {
  userEmail: string;
  userStripeSubscriptionId?: string;
}
