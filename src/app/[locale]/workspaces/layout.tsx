import { SidebarProvider } from "@/components/ui/sidebar";
import "../globals.css";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { AppSidebar } from "@/components/common/side-bar/app-sidebar";

export default function WorkspaceLayout({
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
        <SidebarProvider>
          <AppSidebar />
          {children}
        </SidebarProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}
