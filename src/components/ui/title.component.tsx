import { cn } from "@/lib/utils";
import React from "react";

interface TitleProps extends React.ComponentProps<"h1"> {
  text: string;
}

export function Title({ text, ...props }: TitleProps) {
  return (
    <React.Fragment>
      <h1
        className={cn(
          "text-2xl lg:text-4xl font-bold text-black dark:text-white",
          props.className
        )}
        {...props}
      >
        {text}
      </h1>
    </React.Fragment>
  );
}
