"use client";

import React from "react";
import { CreateWorkspaceDialog } from "./create-workspace-dialog";
import { useTranslations } from "next-intl";

interface WorkspaceHomeHeaderProps extends React.ComponentProps<"header"> {
  userId: string | undefined;
}

export default function WorkspaceHomeHeader({
  userId,
  ...props
}: WorkspaceHomeHeaderProps) {
  return (
    <header className="flex w-full gap-4 items-center" {...props}>
      {/* <h1 className="font-semibold text-lg">{t("workspace.title")}</h1> */}
      <CreateWorkspaceDialog userId={userId} />
    </header>
  );
}
