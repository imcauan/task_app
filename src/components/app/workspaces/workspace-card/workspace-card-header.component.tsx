"use client";

import { Container } from "@/components/ui/container.component";
import { Title } from "@/components/ui/title.component";
import { CardHeader } from "@/components/ui/card";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";
import Image from "next/image";
import React from "react";

interface WorkspaceCardHeaderProps {
  workspace: WorkspaceEntity;
}

export function WorkspaceCardHeader({ workspace }: WorkspaceCardHeaderProps) {
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
