"use client";

import AvatarCircles from "@/components/ui/avatar-circles";
import { WorkspaceEntity } from "@/shared/workspaces/types/workspace.entity";
import React from "react";
import { AddMemberDialog } from "@/components/app/workspaces/add-member-dialog";
import { useUser } from "@/shared/auth/hooks/user.hook";

interface WorkspaceHeaderProps extends React.ComponentProps<"header"> {
  workspace: WorkspaceEntity;
}

export function WorkspaceHeader({ workspace, ...props }: WorkspaceHeaderProps) {
  const { data: user } = useUser();

  return (
    <header {...props} className="w-full flex flex-col max-h-20">
      <div className="w-full mt-10 px-6 flex gap-4 items-center">
        <h1 className="font-semibold text-xl">{workspace.name}</h1>
        <div className="flex gap-3 text-center">
          <AddMemberDialog name={user?.name!} workspaceName={workspace.name} />
        </div>
      </div>
    </header>
  );
}
