import { IconType } from "react-icons/lib";
import { MdDashboard, MdLogout, MdSend, MdSettings } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useLogout } from "@/shared/auth/hooks/useLogout";
import { BsPeopleFill } from "react-icons/bs";

export interface LinkEntity {
  href: string;
  icon: IconType;
  text: string;
  onClick?: () => void;
}

export const links: LinkEntity[] = [
  {
    href: "/dashboard",
    icon: MdDashboard,
    text: "Dashboard",
  },
  {
    href: "/workspaces/all",
    icon: BsPeopleFill,
    text: "Workspaces",
  },
  {
    href: "/tasks",
    icon: FaCheck,
    text: "Tasks",
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
