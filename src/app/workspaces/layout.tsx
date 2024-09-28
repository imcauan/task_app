import "../globals.css";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/components/common/ThemeProvider/ThemeProvider";

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
        {children}
      </ThemeProvider>
    </QueryProvider>
  );
}
