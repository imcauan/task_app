import { IconType } from "react-icons/lib";
import { MdLogout, MdSend, MdSettings } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useLogout } from "@/shared/auth/hooks/logout.hook";
import { BsPeopleFill } from "react-icons/bs";
import { HiArrowTrendingUp } from "react-icons/hi2";
export interface LinkEntity {
  href: string;
  icon: IconType;
  text: string;
  onClick?: () => void;
}

export const links: LinkEntity[] = [
  {
    href: "/dashboard",
    icon: HiArrowTrendingUp,
    text: "Dashboard",
  },
  {
    href: "/workspaces/all",
    icon: BsPeopleFill,
    text: "Workspaces",
  },
  {
    href: "/chat",
    icon: MdSend,
    text: "Chats",
  },
  {
    href: "/settings",
    icon: MdSettings,
    text: "Settings",
  },
  {
    href: "/login",
    icon: MdLogout,
    text: "Logout",
    onClick: useLogout,
  },
];
