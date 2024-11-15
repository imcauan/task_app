"use client";

import { FormInput } from "@/components/ui/form-input";
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
import { Title } from "@/components/ui/title.component";
import { useTranslations } from "next-intl";
import { RoundSpinner } from "@/components/ui/spinner";

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  file: z.custom<File | undefined>(),
});

export function UpdateUserForm() {
  const t = useTranslations("index");
  const [image, setImage] = React.useState<File | null>(null);
  const { data: user } = useUser();
  const { isPending, mutateAsync: UpdateUserFn } = useUpdateUser();
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
        className="flex flex-col max-w-96 h-full gap-3 bg-neutral-800 p-4 rounded-lg"
      >
        <Title
          text={t("settings.profile.update-user.title")}
          className="text-sm font-semibold"
        />
        <Label
          htmlFor="file"
          className="text-neutral-950 dark:text-neutral-50 font-medium text-base"
        >
          Image:
        </Label>
        <Input
          type="file"
          name="file"
          onChange={handleImageChange}
          className="border-2 border-white"
        />
        <FormInput form={form} name="name" label="Name:" />
        <FormInput form={form} name="email" label="Email:" type="email" />
        <FormInput
          form={form}
          name="password"
          label="Password:"
          type="password"
        />
        <Button
          className="bg-gradient-to-r from-amber-400 to-indigo-600 text-white"
          type="submit"
        >
          {isPending ? (
            <RoundSpinner />
          ) : (
            t("settings.profile.update-user.submit")
          )}
        </Button>
      </form>
    </Form>
  );
}
