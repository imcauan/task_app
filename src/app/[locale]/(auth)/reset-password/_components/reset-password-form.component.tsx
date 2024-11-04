import { ResetPasswordFormHeader } from "@/app/[locale]/(auth)/reset-password/_components/reset-password-form-header.component";
import { Container } from "@/components/common/Container/container.component";
import { FormInput } from "@/components/common/FormInput";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useResetPassword } from "@/shared/auth/hooks/reset-password.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  password: z.string().min(1, "Password is required"),
  confirmPassword: z.string().min(1, "Confirm password is required"),
});

interface ResetPasswordFormProps {
  token: string;
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const { mutate: resetPasswordFn } = useResetPassword();
  const t = useTranslations("index");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    resetPasswordFn({ token, ...data });
  };

  return (
    <Container className="w-full flex flex-col justify-center items-center absolute h-full">
      <Container className="w-96 h-96 border bg-white relative rounded-lg p-4">
        <BorderBeam colorFrom="#fbbf24" colorTo="#4f46e5" borderWidth={2} />
        <ResetPasswordFormHeader />
        <Form {...form}>
          <form
            className="mt-10 flex flex-col gap-4 h-full "
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormInput
              form={form}
              name="password"
              type="password"
              label={t("reset-password.password")}
              placeholder="********"
            />
            <FormInput
              form={form}
              name="confirmPassword"
              type="password"
              label={t("reset-password.confirm-password")}
              placeholder="********"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-400 to-indigo-600"
            >
              {t("reset-password.confirm")}
            </Button>
          </form>
        </Form>
      </Container>
    </Container>
  );
}
