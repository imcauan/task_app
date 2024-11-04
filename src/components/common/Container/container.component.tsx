import { cn } from "@/lib/utils";
import React from "react";

export interface ContainerProps extends React.ComponentProps<"div"> {}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div className={cn("", className)} {...props}>
      {props.children}
    </div>
  );
}
