import { Providers } from "@/providers/providers";
import { AppSidebar } from "@/components/common/side-bar/app-sidebar";
import "../globals.css";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <AppSidebar />
      {children}
    </Providers>
  );
}
