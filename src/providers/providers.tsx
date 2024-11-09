import { SidebarProvider } from "@/components/ui/sidebar";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

export async function Providers({ children }: ProvidersProps) {
  const messages = await getMessages();

  return (
    <QueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <NextIntlClientProvider messages={messages}>
          <SidebarProvider>{children}</SidebarProvider>
        </NextIntlClientProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}
