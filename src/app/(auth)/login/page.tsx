"use client";

import Link from "next/link";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { FaTasks } from "react-icons/fa";
import { useSignIn } from "@/shared/auth/hooks/sign-in.hook";
import { FormInput } from "@/components/common/FormInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email("Email is invalid"),
  password: z.string().min(1, "Password is required"),
});

export default function Page() {
  const { mutateAsync: SignInFn } = useSignIn();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await SignInFn(data);
  };

  return (
    <div className="w-full h-dvh lg:h-screen dark:bg-black flex flex-col justify-center items-center gap-4">
      <div className="text-center">
        <div className="flex justify-center w-full items-center gap-2 text-lg">
          <FaTasks />
          <p className="font-semibold">TaskApp</p>
        </div>
        <h1 className="text-xl font-semibold">Welcome back!</h1>
        <p className="text-base font-semibold text-neutral-400">
          Login to keep your team updated!
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
            <Button type="submit">Login</Button>
            <Link href="/register" className="text-center">
              Don&apos;t you have an account?
              <span className="font-bold">Register</span>
            </Link>
          </form>
        </Form>
      </div>
    </div>
  );
}
