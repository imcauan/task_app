"use client";

import { FormInput } from "@/components/common/FormInput";
import { RoundSpinner } from "@/components/common/Spinner/spinner";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useSignUpByInvite } from "@/shared/auth/hooks/sign-up-by-invite.hook";
import { useSignUp } from "@/shared/auth/hooks/sign-up.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { FaTasks } from "react-icons/fa";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email is invalid"),
  password: z.string().min(1, "Password is required"),
});

export default function Page({ params }: { params: { workspaceId: string } }) {
  const { workspaceId } = params;
  const { mutateAsync: SignUpFn } = useSignUp();
  const { mutateAsync: SignUpByInviteFn } = useSignUpByInvite();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (workspaceId) {
      await SignUpByInviteFn({ ...data, workspaceId });
    }

    await SignUpFn(data);
  };

  return (
    <div className="w-full h-dvh lg:h-screen dark:bg-black flex flex-col justify-center items-center gap-4">
      <div className="text-center">
        <div className="flex justify-center w-full items-center gap-2 text-lg">
          <FaTasks />
          <p className="font-semibold">TaskApp</p>
        </div>
        <h1 className="text-xl font-semibold">Welcome to the App!</h1>
        <p className="text-base font-semibold text-neutral-400">
          Register to use our app!
        </p>
      </div>
      <div className="min-w-96">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4"
          >
            <FormInput
              form={form}
              name="name"
              label="Name:"
              placeholder="John Doe"
            />
            <FormInput
              form={form}
              name="email"
              label="Email:"
              type="email"
              placeholder="johndoe@email.com"
            />
            <FormInput
              form={form}
              name="password"
              label="Password:"
              type="password"
              placeholder="*******"
            />
            <Button type="submit">Register</Button>
            <Link href={"/login"} className="text-center">
              Do you have an account? <span className="font-bold">Login</span>
            </Link>
          </form>
        </Form>
      </div>
    </div>
  );
}
