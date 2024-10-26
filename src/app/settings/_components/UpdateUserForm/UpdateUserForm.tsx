"use client";

import { FormInput } from "@/components/common/FormInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/shared/auth/hooks/user.hook";
import { useUpdateUser } from "@/shared/user/hooks/update-user.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  file: z.custom<File | undefined>(),
});

export function UpdateUserForm() {
  const [image, setImage] = React.useState<File | null>(null);
  const { data: user } = useUser();
  const { mutateAsync: UpdateUserFn } = useUpdateUser();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name!,
      email: user?.email!,
      password: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type } = e.target;

    if (type === "file") {
      const file = e.target.files?.[0];

      if (file) {
        setImage(file);
      }
    }
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await UpdateUserFn({ id: user?.id!, image: image!, ...data });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col max-w-96 h-full gap-3"
      >
        <Label htmlFor="file">Image:</Label>
        <Input type="file" name="file" onChange={handleImageChange} />
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
