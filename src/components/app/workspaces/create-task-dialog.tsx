import { FormInput } from "@/components/ui/form-input";
import { buttonVariants } from "@/components/ui/button";
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
import { useCreateTask } from "@/shared/tasks/hooks/create-task.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TaskEntity } from "@/shared/tasks/types/task.entity";
import { FaPlus } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { SelectPriority } from "@/components/app/workspaces/select-priority.component";
import { TaskPriority } from "@/shared/tasks/enums/task-priority.enum";
import { TaskMemberSelect } from "@/components/app/workspaces/task-member-select";
import { WorkspaceMember } from "@/shared/workspaces/types/workspace-member.type";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";
import { UserEntity } from "@/shared/user/types/user.entity";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty!" }),
  description: z.string(),
  priority: z.enum([TaskPriority.LOW, TaskPriority.MEDIUM, TaskPriority.HIGH]),
  members: z.array(z.custom<WorkspaceMember>()).optional(),
});

interface CreateTaskDialogProps extends React.ComponentProps<"dialog"> {
  userId: string;
  columnId: string;
  setTasks: React.Dispatch<React.SetStateAction<TaskEntity[]>>;
  workspace?: WorkspaceEntity;
  setSelectedPriority: React.Dispatch<React.SetStateAction<TaskPriority>>;
  selectedPriority: TaskPriority;
}

export function CreateTaskDialog({
  userId,
  workspace,
  columnId,
  setTasks,
  selectedPriority,
  setSelectedPriority,
  ...props
}: CreateTaskDialogProps) {
  const t = useTranslations("index");
  const { mutateAsync: CreateTaskFn } = useCreateTask();

  const [selectedMembers, setSelectedMembers] = React.useState<UserEntity[]>(
    []
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      priority: TaskPriority.LOW,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const task = await CreateTaskFn({
      name: data.name,
      description: data.description,
      workspaceId: workspace?.id,
      columnId,
      priority: selectedPriority,
      members: selectedMembers,
    });

    setTasks((prev) => [...(prev ?? []), task]);
  };

  return (
    <Dialog {...props}>
      <DialogTrigger className="font-medium text-sm flex items-center gap-3">
        <FaPlus className="bg-gradient-to-r from-amber-400 to-indigo-600 text-white rounded-full size-5 p-1" />
        {t("workspace.kanban.create-task")}
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-neutral-900">
        <DialogHeader>
          <DialogTitle>{t("workspace.kanban.create-task")}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              form={form}
              name="name"
              label={t("workspace.kanban.create-task-form.name")}
              placeholder="Fix ui bug."
            />
            <FormInput
              form={form}
              name="description"
              label={t("workspace.kanban.create-task-form.description")}
              placeholder="Button is not working."
            />
            <SelectPriority
              form={form}
              name="priority"
              label={t("workspace.kanban.create-task-form.priority")}
              selectedPriority={selectedPriority}
              setSelectedPriority={setSelectedPriority}
            />
            {workspace && workspace?.members.length > 1 && (
              <TaskMemberSelect
                form={form}
                name="members"
                label={t("workspace.kanban.create-task-form.members")}
                members={workspace.members || []}
                selectedMembers={selectedMembers}
                setSelectedMembers={setSelectedMembers}
              />
            )}
            <DialogFooter className="w-full flex justify-end gap-4">
              <DialogClose className={buttonVariants({ variant: "link" })}>
                {t("button-actions.cancel")}
              </DialogClose>
              <DialogClose
                className={
                  "bg-gradient-to-r from-amber-400 to-indigo-600 text-white text-sm rounded-md px-3"
                }
                type="submit"
              >
                {t("button-actions.create")}
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
