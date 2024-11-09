import { IconType } from "react-icons/lib";
import { MdLogout, MdSend, MdSettings } from "react-icons/md";
import { useLogout } from "@/shared/auth/hooks/logout.hook";
import { BsPeopleFill } from "react-icons/bs";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { useLocale } from "next-intl";

export interface LinkEntity {
  href: string;
  icon: IconType;
  text: string;
  onClick?: () => void;
}
export function useSidebarLinks() {
  const links: LinkEntity[] = [
    {
      href: `workspaces`,
      icon: BsPeopleFill,
      text: "Workspaces",
    },
    {
      href: `chat`,
      icon: MdSend,
      text: "Chats",
    },
    {
      href: `settings`,
      icon: MdSettings,
      text: "Settings",
    },
    {
      href: `login`,
      icon: MdLogout,
      text: "Logout",
      onClick: useLogout,
    },
  ];

  return links;
}
