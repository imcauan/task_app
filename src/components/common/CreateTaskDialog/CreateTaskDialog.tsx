import { FormInput } from "@/components/common/FormInput";
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
import { useCreateTask } from "@/shared/tasks/hooks/create-task.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaCirclePlus } from "react-icons/fa6";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty!" }),
  description: z.string(),
});

interface CreateTaskDialogProps extends React.ComponentProps<"dialog"> {
  userId: string;
  columnId: string;
  workspaceId?: string;
}

export function CreateTaskDialog({
  userId,
  workspaceId,
  columnId,
  ...props
}: CreateTaskDialogProps) {
  const { mutateAsync: CreateTaskFn } = useCreateTask();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await CreateTaskFn({
      name: data.name,
      description: data.description,
      user_id: userId,
      workspaceId,
      columnId,
    });
  };

  return (
    <Dialog {...props}>
      <DialogTrigger className="font-semibold text-sm flex items-center gap-3">
        <FaCirclePlus />
        Create a new task
      </DialogTrigger>
      <DialogContent className="dark:bg-black">
        <DialogHeader>
          <DialogTitle>Create a new task</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              form={form}
              name="name"
              label="Name:"
              placeholder="Fix ui bug."
            />
            <FormInput
              form={form}
              name="description"
              label="Description:"
              placeholder="Button is not working."
            />
            <div className="w-full flex justify-end gap-4">
              <DialogClose>
                <Button variant={"link"}>Cancelar</Button>
              </DialogClose>
              <DialogClose>
                <Button type="submit">Salvar</Button>
              </DialogClose>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
