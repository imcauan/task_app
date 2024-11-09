import { SignInFormHeader } from "@/components/app/auth/login/sign-in-form-header.component";
import { Container } from "@/components/ui/container.component";
import { FormInput } from "@/components/ui/form-input";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useSignIn } from "@/shared/auth/hooks/sign-in.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Email is invalid"),
  password: z.string().min(1, "Password is required"),
});

export function SignInForm() {
  const locale = useLocale();
  const t = useTranslations("index");
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
    <Container className="w-full flex flex-col border justify-center items-center absolute h-full">
      <Container className="w-96 h-96 border bg-white dark:bg-neutral-800 relative rounded-lg p-4">
        <BorderBeam colorFrom="#fbbf24" colorTo="#4f46e5" borderWidth={2} />
        <SignInFormHeader />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 p-4"
          >
            <FormInput
              form={form}
              name="email"
              label={t("login.email")}
              type="email"
              placeholder="johndoe@email.com"
            />
            <FormInput
              form={form}
              name="password"
              label={t("login.password")}
              type="password"
              placeholder="*******"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-400 to-indigo-600"
            >
              {t("login.login")}
            </Button>
            <Link
              href={`forgot-password`}
              className="text-sm text-center font-semibold"
            >
              {t("login.forgot-password")}
            </Link>
            <Link href={`/${locale}/register`} className="text-center">
              {t("login.account-ask")}
            </Link>
          </form>
        </Form>
      </Container>
    </Container>
  );
}
