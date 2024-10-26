import React from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

export interface FormInputProps<T extends FieldValues>
  extends Omit<React.ComponentProps<"input">, "form"> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
}

export function FormInput<T extends FieldValues>({
  form,
  name,
  label,
  ...props
}: FormInputProps<T>) {
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
            <Input
              className={cn(
                "w-full text-neutral-950 dark:text-neutral-50 rounded-none",
                props.className
              )}
              {...field}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
