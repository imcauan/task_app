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
        <Title className="text-base" text={workspace.name} />
      </CardHeader>
    </React.Fragment>
  );
}
