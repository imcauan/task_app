import { Separator } from "@/components/ui/separator";
import React from "react";
import { FaTasks } from "react-icons/fa";

interface LandingPageFooterProps extends React.ComponentProps<"footer"> {}

export function LandingPageFooter({ ...props }: LandingPageFooterProps) {
  return (
    <footer
      className="w-full flex flex-col p-6 mt-6 justify-center items-center"
      {...props}
    >
      <Separator />
      <div className="flex gap-2 items-center mt-6 px-2">
        <FaTasks />
        <p className="font-semibold">TaskApp</p>
        <p>Made by Cauan Diniz.</p>
      </div>
    </footer>
  );
}
