import { SignUpFormHeader } from "@/components/app/auth/register/sign-up-form-header.component";
import { Container } from "@/components/ui/container.component";
import { FormInput } from "@/components/ui/form-input";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useSignUpByInvite } from "@/shared/auth/hooks/sign-up-by-invite.hook";
import { useSignUp } from "@/shared/auth/hooks/sign-up.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email is invalid"),
  password: z.string().min(1, "Password is required"),
});

interface SignUpFormProps {
  workspaceId?: string;
}

export function SignUpForm({ workspaceId }: SignUpFormProps) {
  const t = useTranslations("index");
  const locale = useLocale();
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
    console.log(`workspaceId => ${workspaceId}`);
    return SignUpByInviteFn({ ...data, workspaceId });
  };

  return (
    <Container className="w-full flex flex-col justify-center items-center absolute h-full">
      <Container className="w-96 border dark:bg-neutral-800 relative rounded-lg p-4">
        <BorderBeam colorFrom="#fbbf24" colorTo="#4f46e5" borderWidth={2} />
        <SignUpFormHeader />
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
            <Button
              className=" bg-gradient-to-r from-amber-400 to-indigo-600"
              type="submit"
            >
              {t("register.register")}
            </Button>
            <Link href={`/${locale}/login`} className="text-center">
              {t("register.account-ask")}
            </Link>
          </form>
        </Form>
      </Container>
    </Container>
  );
}
