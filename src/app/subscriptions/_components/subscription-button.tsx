import Link from "next/link";
import React from "react";

interface SubscriptionButtonProps extends React.ComponentProps<"a"> {}

export function SubscriptionButton({ ...props }: SubscriptionButtonProps) {
  return (
    <Link
      className="bg-black dark:bg-white text-white dark:text-black font-semibold p-2 mt-4"
      {...props}
      href={"/subscriptions"}
      onClick={props.onClick}
    >
      Buy now.
    </Link>
  );
}
