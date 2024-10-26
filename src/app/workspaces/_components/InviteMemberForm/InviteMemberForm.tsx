"use client";

import React from "react";
import { z } from "zod";
import { FormInput } from "@/components/common/FormInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useInviteMemberByEmail } from "@/shared/mail/hooks/invite-member-by-email.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface InviteMemberFormProps extends React.ComponentProps<"form"> {
  name: string;
  workspaceName: string;
}

const formSchema = z.object({
  email: z.string().email("Email is invalid"),
});

export function InviteMemberForm({
  name,
  workspaceName,
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
      link: `http://localhost:3000/workspaces`,
      workspaceName: workspaceName,
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
          <Button className="rounded-none" type="submit">
            Invite
          </Button>
        </div>
      </form>
    </Form>
  );
}
