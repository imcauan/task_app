import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import React from "react";
import { locales } from "@/config";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "index" });

  return {
    title: t("title"),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <QueryProvider>
        <body className={inter.className}>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </QueryProvider>
    </html>
  );
}
