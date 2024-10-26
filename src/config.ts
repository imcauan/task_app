export const config = {
  stripe: {
    plans: {
      free: {
        priceId: "price_1Q6aY1FvcR3BIVLpL1lQPWfv",
        quota: {
          workspace: 1,
        },
      },
      pro: {
        priceId: "price_1Q6w9MFvcR3BIVLpe4A5d76u",
        quota: {
          workspace: -1,
        },
      },
    },
  },
};
