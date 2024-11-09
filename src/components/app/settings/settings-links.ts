import { FaCrown, FaUser } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export interface LinkEntity {
  href: string;
  icon: IconType;
  text: string;
  onClick?: () => void;
}

export const settingsLinks: LinkEntity[] = [
  {
    href: "/settings/profile",
    icon: FaUser,
    text: "Profile",
  },
  {
    href: "/settings/subscription",
    icon: FaCrown,
    text: "Subscription",
  },
];
