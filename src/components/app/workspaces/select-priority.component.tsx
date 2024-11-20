"use client";

import {
  Select,
  SelectContent,
  SelectItem,
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
import { WorkspacePriority } from "@/shared/workspaces/enums/workspace-priority.enum";

export interface SelectPriorityProps<T extends FieldValues>
  extends Omit<React.ComponentProps<"select">, "form"> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  setSelectedPriority: React.Dispatch<React.SetStateAction<TaskPriority>>;
  selectedPriority: TaskPriority;
}

export function SelectPriority<T extends FieldValues>({
  form,
  name,
  label,
  setSelectedPriority,
  selectedPriority,
}: SelectPriorityProps<T>) {
  const t = useTranslations("index");
  const priorities = [
    {
      value: WorkspacePriority.LOW,
      label: t("workspace.kanban.create-task-form.priorities.LOW"),
    },
    {
      value: WorkspacePriority.MEDIUM,
      label: t("workspace.kanban.create-task-form.priorities.MEDIUM"),
    },
    {
      value: WorkspacePriority.HIGH,
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
              onValueChange={(e) => setSelectedPriority(e as TaskPriority)}
              {...field}
              value={selectedPriority}
            >
              <SelectTrigger className="shadow-none">
                {selectedPriority}
              </SelectTrigger>
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
