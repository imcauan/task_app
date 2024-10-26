import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

interface LandingPageMainProps extends React.ComponentProps<"div"> {}

export function LandingPageMain({ ...props }: LandingPageMainProps) {
  return (
    <div
      className="flex justify-center h-full items-center w-full px-14"
      {...props}
    >
      <div className="flex flex-col gap-4 text-left">
        <h1 className="text-4xl lg:text-4xl font-bold">
          The Ultimate Task Management Tool for Your Busy Life
        </h1>
        <p className="font-normal text-xl lg:text-xl text-left break-normal text-neutral-400 dark:text-neutral-700">
          Effortlessly track tasks, manage deadlines, and collaborate with your
          team. Our intuitive Kanban system keeps your projects moving forward
          with customizable columns and seamless integrations.
        </p>
        <Link
          href={"/login"}
          className="bg-black dark:bg-white text-white dark:text-black p-3 w-32 font-medium text-base text-center rounded flex items-center gap-3"
        >
          <FaArrowRight />
          Try now.
        </Link>
      </div>
    </div>
  );
}
