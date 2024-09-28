"use client";

import AvatarCircles from "@/components/ui/avatar-circles";
import { WorkspaceEntity } from "@/shared/workspaces/interfaces/WorkspaceEntity";
import React from "react";
import { AddMemberDialog } from "../AddMemberDialog/AddMemberDialog";

interface WorkspaceHeaderProps extends React.ComponentProps<"header"> {
  workspace: WorkspaceEntity;
}

export function WorkspaceHeader({ workspace, ...props }: WorkspaceHeaderProps) {
  const avatarUrls = workspace.members.map((m) => String(m.image));

  return (
    <header {...props} className="w-full flex flex-col max-h-20">
      <div className="w-full mt-10 px-6 flex gap-4 items-center">
        <h1 className="font-semibold text-xl">{workspace.name}</h1>
        <div className="flex gap-3 text-center">
          <AvatarCircles
            avatarUrls={avatarUrls}
            numPeople={workspace.members.length}
          />
          <AddMemberDialog />
        </div>
      </div>
    </header>
  );
}
