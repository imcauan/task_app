"use client";

import { ForgotPasswordFormHeader } from "@/components/app/auth/forgot-password/forgot-password-form-header.component";
import { Container } from "@/components/ui/container.component";
import { FormInput } from "@/components/ui/form-input";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForgotPassword } from "@/shared/auth/hooks/forgot-password.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Logo } from "@/components/ui/logo.component";

const formSchema = z.object({
  email: z.string().email("Email is invalid"),
});

export function ForgotPasswordForm() {
  const locale = useLocale();
  const { forgotPasswordFn } = useForgotPassword();
  const t = useTranslations("index");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await forgotPasswordFn({
      email: data.email,
    });
  };

  return (
    <Container className="flex flex-col items-center">
      <Logo />
      <Container className="w-96 border dark:bg-neutral-800 relative rounded-lg p-6">
        <BorderBeam colorFrom="#fbbf24" colorTo="#4f46e5" borderWidth={2} />
        <ForgotPasswordFormHeader />
        <Form {...form}>
          <form
            className="mt-10 flex flex-col gap-4 h-full "
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormInput
              form={form}
              name="email"
              type="email"
              label={t("forgot-password.email")}
              placeholder="johndoe@email.com"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-400 to-indigo-600"
            >
              {t("forgot-password.confirm")}
            </Button>
            <Link href={`/${locale}/register`} className="text-center">
              {t("login.account-ask")}
            </Link>
          </form>
        </Form>
      </Container>
    </Container>
  );
}
