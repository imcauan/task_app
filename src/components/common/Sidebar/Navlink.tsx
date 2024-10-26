"use client";

import Link, { LinkProps } from "next/link";
import React from "react";
import { LinkEntity } from "./links";
import { usePathname } from "next/navigation";

interface NavlinkProps extends LinkProps {
  link: LinkEntity;
}

export function Navlink({ link, ...props }: NavlinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname.includes(link.href) ||
    pathname === props.as ||
    pathname.startsWith(String(props.as));

  return (
    <>
      <Link
        href={link.href}
        className={
          isActive
            ? "bg-black dark:bg-white text-white dark:text-black flex items-center gap-2 w-full cursor-pointer text-lg rounded-md px-2"
            : "flex items-center gap-2 w-full cursor-pointer text-lg px-2"
        }
        onClick={props.onClick}
      >
        {link.icon !== undefined && <link.icon />}
        <p className="font-semibold">{link.text}</p>
      </Link>
    </>
  );
}
