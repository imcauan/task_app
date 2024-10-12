import { config } from "@/config";
import Stripe from "stripe";

export const stripe = new Stripe(config.stripe.secretKey, {
  apiVersion: "2024-09-30.acacia",
  httpClient: Stripe.createFetchHttpClient(),
});

export const getStripeCustomerByEmail = async (email: string) => {
  const customers = await stripe.customers.list({
    email,
  });
  return customers.data[0];
};

export const createStripeCustomer = async (input: {
  name?: string;
  email: string;
}) => {
  const customer = await getStripeCustomerByEmail(input.email);
  if (customer) return customer;

  const createdCustomer = await stripe.customers.create({
    email: input.email,
    name: input.name,
  });

  await stripe.subscriptions.create({
    customer: createdCustomer.id,
    items: [{ price: config.stripe.plans.free.priceId }],
  });

  return createdCustomer;
};

export const createCheckoutSession = async (
  userEmail: string,
  userStripeSubscriptionId: string
) => {
  try {
    const customer = await createStripeCustomer({
      email: userEmail,
    });

    const subscription = await stripe.subscriptionItems.list({
      subscription: userStripeSubscriptionId,
      limit: 1,
    });

    const session = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/settings/subscription`,
      flow_data: {
        type: "subscription_update_confirm",
        after_completion: {
          type: "redirect",
          redirect: {
            return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/settings/subscription?success=true`,
          },
        },
        subscription_update_confirm: {
          subscription: userStripeSubscriptionId,
          items: [
            {
              id: subscription.data[0].id,
              price: config.stripe.plans.pro.priceId,
              quantity: 1,
            },
          ],
        },
      },
    });

    return {
      url: session.url,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error creating checkout session");
  }
};

export const getCustomerSubscription = async (customerId: string) => {
  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
    limit: 1,
  });

  return subscriptions;
};
