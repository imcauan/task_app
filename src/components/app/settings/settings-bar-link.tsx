import Link, { LinkProps } from "next/link";
import { LinkEntity } from "@/shared/ui/types/link.entity";

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
