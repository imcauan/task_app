"use client";

import { FormInput } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useCreateWorkspace } from "@/shared/workspaces/hooks/create-workspace.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { WorkspacePriority } from "@/shared/workspaces/enums/workspace-priority.enum";
import { SelectWorkspacePriority } from "@/components/app/workspaces/select-workspace-priority.component";

interface CreateWorkspaceDialogProps extends React.ComponentProps<"dialog"> {
  userId: string | undefined;
}

const formSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty!" }),
  priority: z.enum([
    WorkspacePriority.LOW,
    WorkspacePriority.MEDIUM,
    WorkspacePriority.HIGH,
  ]),
});

export function CreateWorkspaceDialog({
  userId,
  ...props
}: CreateWorkspaceDialogProps) {
  const t = useTranslations("index");
  const { mutate: CreateWorkspaceFn } = useCreateWorkspace();

  const [selectedPriority, setSelectedPriority] =
    React.useState<WorkspacePriority>(WorkspacePriority.LOW);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      priority: WorkspacePriority.LOW,
    },
  });

  const onSubmit = ({ name }: z.infer<typeof formSchema>) => {
    CreateWorkspaceFn({
      name,
      userId,
      priority: selectedPriority,
    });
  };

  return (
    <Dialog {...props}>
      <DialogTrigger className="bg-gradient-to-r from-amber-400 to-indigo-600 text-sm text-black dark:text-white p-2 flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-md ">
        <FaPlus />
        Create
      </DialogTrigger>
      <DialogContent className={cn("dark:bg-neutral-900", props.className)}>
        <DialogHeader>
          <DialogTitle>{t("workspace.create-workspace.title")}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col w-full gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormInput
              form={form}
              name="name"
              label={t("workspace.kanban.create-task-form.name")}
            />
            <SelectWorkspacePriority
              form={form}
              selected={selectedPriority}
              setSelected={setSelectedPriority}
              name="priority"
              label={t("workspace.kanban.create-task-form.priority")}
            />
            <DialogFooter>
              <DialogClose>
                <Button variant={"ghost"}>{t("button-actions.cancel")}</Button>
              </DialogClose>
              <DialogClose>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-amber-400 to-indigo-600 dark:text-white"
                >
                  {t("button-actions.create")}
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
