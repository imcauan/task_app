"use client";

import { LinkEntity } from "@/components/common/Sidebar/links";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface BottombarCard extends LinkProps {
  link: LinkEntity;
}

export function BottombarCard({ link, ...rest }: BottombarCard) {
  const pathname = usePathname();
  const isActive =
    pathname.includes(link.href) ||
    pathname === rest.as ||
    pathname.startsWith(String(rest.as));
  return (
    <>
      <Link
        {...rest}
        className={
          isActive
            ? "size-10 h-full flex justify-center items-center bg-black dark:bg-white text-white dark:text-black"
            : "size-10 h-full flex justify-center items-center"
        }
        href={link.href}
      >
        {link.icon !== undefined && (
          <link.icon
            className={isActive ? "text-white-600 size-7" : "text-black size-7"}
          />
        )}
        <p
          className={
            isActive
              ? "font-semibold text-base text-zinc-100 hidden md:flex"
              : "font-semibold text-base text-neutral-950 dark:text-zinc-100 hidden md:block"
          }
        >
          {link.text}
        </p>
      </Link>
    </>
  );
}
