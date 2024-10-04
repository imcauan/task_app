import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

export interface PlanEntity {
  name: string;
  price: number;
  description: string;
  features: FeatureProps[];
}

interface FeatureProps {
  name: string;
  icon: IconType;
}

export const plans: PlanEntity[] = [
  {
    name: "Free",
    description: "For small teams and individuals",
    price: 0,
    features: [
      { name: "1 workspace", icon: FaX },
      { name: "Can't access dashboard", icon: FaX },
      { name: "Can't access chats", icon: FaX },
    ],
  },
  {
    name: "Pro",
    description: "For big companies and organizations",
    price: 29,
    features: [
      { name: "Unlimited workspaces", icon: FaCheck },
      { name: "Can access dashboard", icon: FaCheck },
      { name: "Can access chats", icon: FaCheck },
    ],
  },
];
