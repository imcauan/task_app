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
import { useGetMembershipByUserId } from "@/hooks/membership/useGetMembershipByUserId";
import { useCreateTask } from "@/hooks/tasks/useCreateTask";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaCirclePlus } from "react-icons/fa6";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty!" }),
  description: z.string().min(1, { message: "Description cannot be empty!" }),
});

/*
  name: string;
  description: string;
  status: TTaskStatus;
  members: Membership[];
  workspace_id: string;
*/

interface CreateTaskDialogProps {
  workspaceId: string;
  userId: string;
}

export function CreateTaskDialog({
  workspaceId,
  userId,
}: CreateTaskDialogProps) {
  const { data: membership } = useGetMembershipByUserId(userId);
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
      workspace_id: workspaceId,
      membershipId: membership?.id,
    });
  };

  return (
    <Dialog>
      <DialogTrigger className="font-semibold text-sm">
        <FaCirclePlus />
      </DialogTrigger>
      <DialogContent>
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
                <Button variant={"outline"}>Cancelar</Button>
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
