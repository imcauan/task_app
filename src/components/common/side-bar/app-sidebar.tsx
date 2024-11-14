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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import { useSidebarLinks } from "@/shared/ui/hooks/sidebar-links.hook";
import { Container } from "@/components/ui/container.component";
import { Logo } from "@/components/ui/logo.component";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
      <Logo />
      <SidebarContent className="h-full flex flex-col justify-center">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((item) => (
                <Tooltip key={item.text}>
                  <TooltipTrigger>
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild>
                        <Link href={item.href}>
                          <item.icon />
                          {item.text}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.text}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
