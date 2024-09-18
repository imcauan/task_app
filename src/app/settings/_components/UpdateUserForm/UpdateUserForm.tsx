import { FormInput } from "@/components/common/FormInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useUpdateUser } from "@/hooks/user/useUpdateUser";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export function UpdateUserForm() {
  const { user } = useAuthContext();
  const { mutateAsync: UpdateUserFn } = useUpdateUser();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await UpdateUserFn({ id: user?.id!, ...data });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col max-w-96 h-full gap-3"
      >
        <FormInput form={form} name="name" label="Name:" />
        <FormInput form={form} name="email" label="Email:" type="email" />
        <FormInput
          form={form}
          name="password"
          label="Password:"
          type="password"
        />
        <Button type="submit">Save informations</Button>
      </form>
    </Form>
  );
}
