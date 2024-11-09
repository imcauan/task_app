import React from "react";
import { BottombarCard } from "./bottom-bar-card";
import { useSidebarLinks } from "@/shared/ui/hooks/sidebar-links.hook";

interface BottombarProps extends React.ComponentProps<"div"> {}

export function Bottombar({ ...props }: BottombarProps) {
  const links = useSidebarLinks();

  return (
    <div
      className=" w-full border-t bottom-0 sticky flex gap-3 lg:hidden justify-center items-end space-y-4 p-2"
      {...props}
    >
      {links.map((l) => (
        <BottombarCard key={l.text} link={l} href={l.href} />
      ))}
    </div>
  );
}
