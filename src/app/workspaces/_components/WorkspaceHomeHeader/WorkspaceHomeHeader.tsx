"use client";

import React from "react";
import { CreateWorkspaceDialog } from "../CreateWorkspaceDialog/CreateWorkspaceDialog";

interface WorkspaceHomeHeaderProps extends React.ComponentProps<"header"> {
  userId: string | undefined;
}

export default function WorkspaceHomeHeader({
  userId,
  ...props
}: WorkspaceHomeHeaderProps) {
  return (
    <header className="flex w-full gap-4 items-center" {...props}>
      <h1 className="font-semibold text-lg">Workspaces.</h1>
      <CreateWorkspaceDialog userId={userId} />
    </header>
  );
}
