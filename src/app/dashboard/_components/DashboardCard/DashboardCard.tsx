import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { IconType } from "react-icons/lib";

export interface DashboardCardProps extends React.ComponentProps<"div"> {
  icon?: IconType;
  title: string;
  number: number;
}

export function DashboardCard({ title, number, ...props }: DashboardCardProps) {
  return (
    <Card className="max-w-64 flex items-center justify-between rounded-none">
      <CardHeader className="w-full flex items-center gap-2">
        <div className="p-1 text-sm">
          {props.icon !== undefined && <props.icon />}
        </div>
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-6">
        <p className="font-semibold">{number}</p>
      </CardContent>
    </Card>
  );
}
