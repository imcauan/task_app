"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useGetCreatedTaskChartData } from "@/shared/tasks/hooks/created-task-chart-data.hook";
import { UserEntity } from "@/shared/user/types/user.entity";
import { useTheme } from "next-themes";
import React from "react";
import { BarChart, CartesianGrid, XAxis, Bar } from "recharts";

const chartConfig = {
  desktop: {
    label: "tasks",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface CompletedTaskChartProps {
  user: UserEntity;
}

export function CompletedTaskChart({ user }: CompletedTaskChartProps) {
  const { data: chartData } = useGetCreatedTaskChartData(user?.id!);
  const { theme } = useTheme();

  return (
    <Card className="rounded-none max-w-96">
      <CardHeader className="flex flex-col">
        <CardTitle>Completed tasks.</CardTitle>
        <CardDescription>January - December.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="tasks"
              fill={theme === "dark" ? "#ffffff" : "#000000"}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
