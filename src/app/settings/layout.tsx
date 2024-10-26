import "../globals.css";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";
import { SettingsBar } from "./_components/SettingsBar/settings-bar";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex w-full bg-white dark:bg-black">
          <Sidebar />
          <SettingsBar />
          {children}
        </div>
      </ThemeProvider>
    </QueryProvider>
  );
}
