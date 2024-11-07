"use client";

import React from "react";
import { useUser } from "@/shared/auth/hooks/user.hook";
import { RoundSpinner } from "@/components/common/Spinner/spinner";
import { Container } from "@/components/common/Container/container.component";
import { DashboardHeader } from "@/app/[locale]/dashboard/_components/DashboardHeader/dashboard-header.component";
import { DashboardWorkspaceCard } from "@/app/[locale]/dashboard/_components/DashboardWorkspaceCard/dashboard-workspace-card.component";
import { Calendar } from "@/components/ui/calendar";
import { DashboardChatCard } from "@/app/[locale]/dashboard/_components/DashboardChatCard/dashboard-chat-card.component";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/Sidebar/app-sidebar";

export default function Page() {
  const { isLoading, data: user } = useUser();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Container className="w-full h-full flex dark:bg-black overflow-hidden">
      {isLoading ? (
        <Container className="w-full h-screen flex items-center justify-center">
          <RoundSpinner />
        </Container>
      ) : (
        <SidebarProvider>
          <AppSidebar />
          <Container className="flex flex-col lg:flex-row h-screen w-full overflow-y-auto">
            <Container className="flex flex-col w-full h-full space-y-4">
              <DashboardHeader />
              <Container className="grid grid-cols-1 lg:grid-cols-3 w-full place-items-center px-4">
                <Container className="flex flex-col gap-2">
                  {user?.workspaces.map((workspace) => (
                    <DashboardWorkspaceCard
                      key={workspace.id}
                      workspace={workspace}
                    />
                  ))}
                </Container>
                <DashboardChatCard chats={user?.chats ?? []} />
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </Container>
            </Container>
          </Container>
        </SidebarProvider>
      )}
    </Container>
  );
}
