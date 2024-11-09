import { IconType } from "react-icons/lib";

export interface LinkEntity {
  href: string;
  icon?: IconType;
  text: string;
  onClick?: () => void;
}
