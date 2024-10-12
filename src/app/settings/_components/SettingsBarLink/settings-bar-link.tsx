import Link, { LinkProps } from "next/link";
import { IconType } from "react-icons/lib";
import { LinkEntity } from "../SettingsBar/links";

export interface SettingsBarLinkProps extends LinkProps {
  link: LinkEntity;
}

export function SettingsBarLink({
  href,
  link,
  ...props
}: SettingsBarLinkProps) {
  return (
    <>
      <Link {...props} href={href} className="text-sm flex items-center gap-2">
        {link.icon !== undefined && <link.icon />}
        {link.text}
      </Link>
    </>
  );
}
