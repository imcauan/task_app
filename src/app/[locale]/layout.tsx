import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { Providers } from "@/providers/providers";
import { Container } from "@/components/ui/container.component";
const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "index" });

  return {
    title: t("title"),
  };
}

export default async function RootLayout({ children }: Readonly<Props>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
