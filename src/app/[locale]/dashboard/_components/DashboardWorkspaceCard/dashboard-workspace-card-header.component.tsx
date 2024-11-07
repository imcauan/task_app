"use client";

import { Container } from "@/components/common/Container/container.component";
import { Title } from "@/components/common/Title/title.component";
import { CardHeader } from "@/components/ui/card";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";
import Image from "next/image";
import React from "react";

interface DashboardWorkspaceCardHeaderProps {
  workspace: WorkspaceEntity;
}

export function DashboardWorkspaceCardHeader({
  workspace,
}: DashboardWorkspaceCardHeaderProps) {
  return (
    <React.Fragment>
      <CardHeader className="flex w-full items-center justify-between gap-4">
        <Container className="flex gap-2 w-full">
          <Image
            src={"/next.svg"}
            alt="Workspace logo"
            width={40}
            height={40}
            className="bg-amber-100 p-2 rounded-full"
          />
          <Title className="text-sm" text={workspace.name} />
        </Container>
      </CardHeader>
    </React.Fragment>
  );
}
