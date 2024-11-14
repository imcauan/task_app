"use client";

import React from "react";
import { z } from "zod";
import { FormInput } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useInviteMemberByEmail } from "@/shared/mail/hooks/invite-member-by-email.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";

interface InviteMemberFormProps extends React.ComponentProps<"form"> {
  name: string;
  workspace: WorkspaceEntity;
}

const formSchema = z.object({
  email: z.string().email("Email is invalid"),
});

export function InviteMemberForm({
  name,
  workspace,
  ...props
}: InviteMemberFormProps) {
  const { InviteMemberByEmailFn } = useInviteMemberByEmail();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async ({ email }: z.infer<typeof formSchema>) => {
    await InviteMemberByEmailFn({
      email,
      username: name,
      workspaceName: workspace.name,
      workspaceId: workspace.id,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
        <FormInput
          form={form}
          type="email"
          name="email"
          label="Email"
          placeholder="Enter email"
        />
        <div className="flex w-full justify-end mt-4 gap-3">
          <Button variant={"outline"} className="rounded-none">
            Cancel
          </Button>
          <Button
            className="rounded-md bg-gradient-to-r from-amber-400 to-indigo-600 text-white"
            type="submit"
          >
            Invite
          </Button>
        </div>
      </form>
    </Form>
  );
}
