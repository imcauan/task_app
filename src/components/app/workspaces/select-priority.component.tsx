"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import React from "react";
import { TaskPriority } from "@/shared/tasks/enums/task-priority.enum";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useTranslations } from "next-intl";

export interface SelectPriorityProps<T extends FieldValues>
  extends Omit<React.ComponentProps<"select">, "form"> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  setSelected: React.Dispatch<React.SetStateAction<TaskPriority>>;
  selected: TaskPriority;
}

export function SelectPriority<T extends FieldValues>({
  form,
  name,
  label,
  setSelected,
  selected,
}: SelectPriorityProps<T>) {
  const t = useTranslations("index");
  const priorities = [
    {
      value: TaskPriority.LOW,
      label: t("workspace.kanban.create-task-form.priorities.LOW"),
    },
    {
      value: TaskPriority.MEDIUM,
      label: t("workspace.kanban.create-task-form.priorities.MEDIUM"),
    },
    {
      value: TaskPriority.HIGH,
      label: t("workspace.kanban.create-task-form.priorities.HIGH"),
    },
  ];

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-neutral-950 dark:text-neutral-50 font-medium text-base">
            {label}
          </FormLabel>
          <FormControl>
            <Select
              onValueChange={(e) => setSelected(e as TaskPriority)}
              {...field}
              value={selected}
            >
              <SelectTrigger className="shadow-none">{selected}</SelectTrigger>
              <SelectContent className="dark:bg-neutral-800 dark:hover:bg-neutral-900">
                {priorities.map((priority) => (
                  <SelectItem
                    key={priority.label}
                    value={priority.value}
                    className="flex w-full"
                  >
                    {priority.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
