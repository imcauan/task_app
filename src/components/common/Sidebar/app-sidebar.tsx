"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Logo } from "@/components/common/Logo/logo.component";
import { BorderBeam } from "@/components/ui/border-beam";
import { useSidebarLinks } from "@/shared/ui/hooks/sidebar-links.hook";

export function AppSidebar() {
  const links = useSidebarLinks();
  return (
    <Sidebar collapsible="icon" className="">
      <BorderBeam
        colorFrom="#fbbf24"
        colorTo="#4f46e5"
        duration={5}
        borderWidth={2}
      />
      <SidebarContent>
        <Logo />
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon />
                      {item.text}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
