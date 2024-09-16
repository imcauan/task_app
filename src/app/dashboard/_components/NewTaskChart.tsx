"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useGetNewTaskChartData } from "@/hooks/tasks/useGetNewTaskChartData";
import { useAuthContext } from "@/hooks/useAuthContext";
import React from "react";
import { HiTrendingUp } from "react-icons/hi";
import { BarChart, CartesianGrid, XAxis, Bar } from "recharts";

const chartConfig = {
  desktop: {
    label: "tasks",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function NewTaskChart() {
  const { user } = useAuthContext();
  const { data: chartData } = useGetNewTaskChartData(user?.id!);

  return (
    <Card>
      <CardHeader>
        <CardTitle>New tasks.</CardTitle>
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
            <Bar dataKey="tasks" fill="#000000" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
