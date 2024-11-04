"use client";

import { ForgotPasswordFormHeader } from "@/app/[locale]/(auth)/forgot-password/_components/forgot-password-form-header.component";
import { Container } from "@/components/common/Container/container.component";
import { FormInput } from "@/components/common/FormInput";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForgotPassword } from "@/shared/auth/hooks/forgot-password.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
    <Container className="w-full flex flex-col justify-center items-center absolute h-full">
      <Container className="w-96 h-96 border bg-white relative rounded-lg p-4">
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
