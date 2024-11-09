"use client";

import { FormInput } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
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

interface CreateWorkspaceDialogProps extends React.ComponentProps<"dialog"> {
  userId: string | undefined;
}

const formSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty!" }),
});

export function CreateWorkspaceDialog({
  userId,
  ...props
}: CreateWorkspaceDialogProps) {
  const { mutateAsync: CreateWorkspaceFn } = useCreateWorkspace();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async ({ name }: z.infer<typeof formSchema>) => {
    await CreateWorkspaceFn({
      name,
      userId,
    });
  };

  return (
    <Dialog {...props}>
      <DialogTrigger className="text-sm text-black dark:text-white p-2 flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-md">
        <FaPlus />
        Create
      </DialogTrigger>
      <DialogContent className={cn("bg-white dark:bg-black", props.className)}>
        <DialogHeader>
          <DialogTitle>Create a workspace.</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col w-full gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormInput form={form} name="name" label="Name:" />
            <div className="flex justify-end gap-4">
              <DialogClose>
                <Button variant={"ghost"}>Delete</Button>
              </DialogClose>
              <DialogClose>
                <Button type="submit">Create</Button>
              </DialogClose>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
