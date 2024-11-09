"use client";

import * as React from "react";
import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { WorkspaceMember } from "@/shared/workspaces/types/workspace-member.type";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface TaskMemberSelectProps<T extends FieldValues>
  extends Omit<React.ComponentProps<"select">, "form"> {
  name: Path<T>;
  label?: string;
  form: UseFormReturn<T>;
  members: WorkspaceMember[];
}

export function TaskMemberSelect<T extends FieldValues>({
  name,
  label,
  form,
  members,
}: TaskMemberSelectProps<T>) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<WorkspaceMember[]>([
    members[0],
  ]);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback((member: WorkspaceMember) => {
    setSelected((prev) => prev.filter((s) => s.id !== member.id));
  }, []);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    []
  );

  const selectables = members.filter((member) => !selected.includes(member));

  console.log(selectables, selected, inputValue);

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
            <Command
              onKeyDown={handleKeyDown}
              className="overflow-visible bg-transparent"
              {...field}
            >
              <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <div className="flex flex-wrap gap-1">
                  {selected.map((member) => {
                    return (
                      <Badge key={member.id} variant="secondary">
                        {member.name}
                        <button
                          className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleUnselect(member);
                            }
                          }}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onClick={() => handleUnselect(member)}
                        >
                          <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                        </button>
                      </Badge>
                    );
                  })}
                  <CommandPrimitive.Input
                    ref={inputRef}
                    value={inputValue}
                    onValueChange={setInputValue}
                    onBlur={() => setOpen(false)}
                    onFocus={() => setOpen(true)}
                    placeholder="Select members..."
                    className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div className="relative mt-2">
                <CommandList>
                  {open && selectables.length > 0 ? (
                    <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                      <CommandGroup className="h-full overflow-auto">
                        {selectables.map((member) => {
                          return (
                            <CommandItem
                              key={member.id}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                              onSelect={(value) => {
                                setInputValue("");
                                setSelected((prev) => [...prev, member]);
                              }}
                              className={"cursor-pointer"}
                            >
                              {member.name}
                            </CommandItem>
                          );
                        })}
                      </CommandGroup>
                    </div>
                  ) : null}
                </CommandList>
              </div>
            </Command>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
